import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../containers/2018';


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