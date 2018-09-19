import React, { Component } from 'react';
import { connect } from 'react-redux';
import piano from '../piano3.jpg';
import south from './south.jpg';


class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div className="select_book">Select a book to get started.</div>;
		}

		return (
			<div className="book_detail">
				<div className="title">{this.props.book.title}</div>
				<div className="pages">Pages: {this.props.book.pages}</div>
				<div className="description">{this.props.book.description}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);