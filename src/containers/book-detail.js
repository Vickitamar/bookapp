import React, { Component } from 'react';
import { connect } from 'react-redux';
import piano from '../piano3.jpg';
import south from './south.jpg';
import Modal from './modal';
import ModalContent from '../components/modalContent'


class BookDetail extends Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		if (!this.props.book) {
			return <div className="select_book">Select a book to get started.</div>;
		}

		return (
			<div className="book_detail">
				<Modal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				>
					<ModalContent />
				</Modal>
				<button onClick={this.toggleModal}>Show modal</button>
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