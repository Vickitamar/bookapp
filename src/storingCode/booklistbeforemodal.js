import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


type Props = {
  pageTitle: string,
}

class BookList extends React.Component<Props> {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<Link to="/2018/detail">
					<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					<div className="hvrbox">
						<img className="list_img hvrbox-layer_bottom" src={book.image} alt="" />
						<div className="hvrbox-layer_top">
							<div className="hvrbox-text">{book.title}</div>
						</div>
					</div>
					</li>
				</Link>
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

export default BookList