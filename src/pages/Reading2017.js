import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../containers/2017'
import BookDetail from '../containers/book-detail'



class Reading2017 extends Component {
	render() {
		return (
			<div className="wrapper">
				<BookList />
				<BookDetail />
			</div>
		);
	}
}

export default Reading2017;