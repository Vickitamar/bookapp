import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import south from './south.jpg';


class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
					<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					<img className="list_img" src={south} alt="south" />
					{book.title}
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

function mapStateToProps(state) {
	//whatever gets returns from here will show up as props inside of BookList
	return {
		books: state.books2018
	};
}

//Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
	//whenever the action selectBook is called, the result should be passed to all our reducers.
	return bindActionCreators({ selectBook: selectBook }, dispatch) //new prop: action creator, dispatch
}

// promote BookList from a component to a container  -  it needs to know about this dispatch method, selectBook. Makes it avaliable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);