import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Reading2018 from './pages/Reading2018';
import Reading2018Detail from './pages/Reading2018Detail';
import Reading2017 from './pages/Reading2017';
import Header from './components/header';
import Menu from './components/navMenu';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<React.Fragment>
			<BrowserRouter>
			<div>
				<Header />
				<Menu />
					<Switch>
							{/*<Route path="/2017" component={Reading2017} />*/}
							<Route path="/2018/detail" component={Reading2018Detail} />
							<Route path="/" component={Reading2018} />
					</Switch>
			</div>
			</BrowserRouter>
		</React.Fragment>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
