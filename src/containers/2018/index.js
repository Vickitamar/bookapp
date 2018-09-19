import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/index';
import { bindActionCreators } from 'redux';
import BookList from '../book-list';

// function mapStateToProps(state) {
// 	//whatever gets returns from here will show up as props inside of BookList
// 	return {
// 		books: state.books2018,
// 		pageTitle: '2018 with index page link up'
// 	};
// }

const mapStateToProps = state => (
	{
		pageTitle: '2018 reading list',
		books: state.books2018
	}
)

// //Anything returned from this function will end up as props on the Booklist container
// function mapDispatchToProps(dispatch) {
// 	//whenever the action selectBook is called, the result should be passed to all our reducers.
// 	return bindActionCreators({ selectBook: selectBook }, dispatch) //new prop: action creator, dispatch
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

const Page2018 = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
// promote BookList from a component to a container  -  it needs to know about this dispatch method, selectBook. Makes it avaliable as a prop.
export default Page2018;