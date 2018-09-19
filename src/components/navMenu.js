import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div>
			<Link to="/2018">
				<button>2018 reading list</button>
			</Link>
			<Link to="/2017">
				<button>2017 reading list</button>
			</Link>
			<button>2016 reading list</button>
			<button>External Reading Lists</button>
		</div>
	);
}





export default Menu;