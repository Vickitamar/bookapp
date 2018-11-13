import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../containers/book-list';


class Reading2018 extends Component {
	render() {
		return (
			<div className="wrapper">
				<BookList />
			</div>
		);
	}
}

export default Reading2018;