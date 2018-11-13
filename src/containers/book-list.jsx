import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Modal from './modal';
import ModalContent from '../components/modalContent'


type Props = {
  pageTitle: string,
}

class BookList extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	renderList() {
		return this.props.books.map((book) => {
			return (
				<div>
				<li
				key={book.title}
				onClick={this.toggleModal}
				className="list-group-item">
				<div className="hvrbox">
					<img className="list_img hvrbox-layer_bottom" src={book.image} alt="" />
					<div className="hvrbox-layer_top">
						<div className="hvrbox-text">{book.title}</div>
					</div>
				</div>
				</li>
				<Modal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				>
				{/*<ModalContent selectbook={this.props.selectBook(book)}/>*/}
				</Modal>
				</div>

			);
		});
	}

	render() {
		return (
			<div className="book_list">
				<ul className="list-group col-sm-4">
						{this.renderList()}
				</ul>
{/*				<Modal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				>
					<ModalContent />
				</Modal>*/}
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
