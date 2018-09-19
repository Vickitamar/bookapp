export function selectBook(book) {
	// selectBook is an action creator, it needs to return an action, an object with a propery.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}