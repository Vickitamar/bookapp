import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


type Props = {
  pageTitle: string,
}

class BookListImage extends React.Component<Props> {

	renderList() {
		return this.props.books.map((book) => {
			return (
					<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					<img className="list_img" src={book.image} alt="" />
					</li>
			);
		});
	}

	render() {
		return (
			<div className="book_list">
				<ul className="list-group col-sm-4">
					{this.renderList()}
				</ul>
			</div>
		)
	}
}

export default BookListImage