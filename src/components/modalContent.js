import React, { Component } from 'react';
import { connect } from 'react-redux';


class modalContent extends Component {
	render() {
		console.log(this.props.selectBook)
		if (!this.props.book) {
			return <div className="select_book">Select a book to get started.</div>;
		}
		return (
			<div className="content">
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

export default connect(mapStateToProps)(modalContent);

