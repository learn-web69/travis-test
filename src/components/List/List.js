import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from "../../store/actions";

class List extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
		return (
			this.props.movies.map(movie => <div key={movie.id}>{ movie.title }</div>)
		);
	}
}

const mapStateToProps = state => ({
	movies: state.movies.movies
});

export { List };

export default connect(mapStateToProps, { fetchMovies })(List);