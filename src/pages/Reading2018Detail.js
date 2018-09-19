import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookDetail from '../containers/book-detail'



class Reading2018Detail extends Component {
	render() {
		return (
			<div className="wrapper">
				<BookDetail />
			</div>
		);
	}
}

export default Reading2018Detail;