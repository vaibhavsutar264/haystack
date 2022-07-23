// if (typeof document !== "undefined") {

import React, { Component } from 'react';
import rootRoutes from './componentsRemake/admin/rootRoutes';
// import Auth from './componentsRemake/auth';
// import NoMatch from './componentsRemake/nomatch';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
// import PrivateRoute from './components/auth/PrivateRoute';
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";


   // browser code

export default class App extends Component {
	render() {
      if (typeof document !== "undefined") {
         // if (typeof document === 'undefined') {
         //    return <></>;
         //  } else {
		return (
			<div className="App">
				<BrowserRouter>
				<NotificationContainer />
					<Switch>
						{/* <Route path='/auth' component={Auth} /> */}
						<Route path='/admin' component={rootRoutes} />
						{/* {getCookie('token') ? <Route path='/admin' component={rootRoutes} /> : <Redirect to={"/auth/login"} />} */}
						{/* {getCookie('token') ? <Redirect to={"/admin"} /> : <Redirect to={"/auth/login"} />} */}
						{/* <Route component={NoMatch} /> */}
					</Switch>
				</BrowserRouter>
			</div>
      );
   }
	}
}

