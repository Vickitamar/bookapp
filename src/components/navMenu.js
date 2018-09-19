import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className="nav-menu">
			<ul className="nav-menu_list">
				<Link to="/2018">
					<li className="nav-menu_list-item">2018 reading list</li>
				</Link>
				<Link to="/2017">
					<li className="nav-menu_list-item">2017 reading list</li>
				</Link>
				<li className="nav-menu_list-item">2016 reading list</li>
				<li className="nav-menu_list-item">External Reading Lists</li>
			</ul>
		</nav>
	);
}





export default Menu;