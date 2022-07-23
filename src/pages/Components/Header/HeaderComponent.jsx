// import React from "react";
import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../BodyComponent/DashboardTemporary";
import Category from "../BodyComponent/Category";
import Faqs from "../BodyComponent/Faqs";
import Pages from "../BodyComponent/Pages";
import Products from "../BodyComponent/Products";
import Settings from "../BodyComponent/Settings";
import BlogComponent from "../BodyComponent/BlogComponent";
import Link from "../BodyComponent/Link";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import { useStyles } from "./HeaderStyles";

export default function HeaderComponent() {
   // useEffect(() => {
   //    const classes = useStyles();

   //    const [mobileOpen, setMobileOpen] = useState(false);
   //    const handleDrawerOpen = () => {
   //      setMobileOpen(!mobileOpen);
   //      //here exclamation means toggle
   //    };
   //    const handleDrawerClose = () => {
   //      setMobileOpen(false);
   //    };
   //  }, [])
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
    //here exclamation means toggle
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      {/* <Navbar/> */}
      {/* <Sidenav/> */}
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* // registerian our routes  */}
      <Box className={classes.wrapper}>
      {/* <Box> */}
        <Switch>
          {/* <Route path='/' component={<Dashboard />} /> */}

          {/* this is working because in the sidenavdata component u have provided link as blog therefore this route is taking ref of that link with his path and on that path it is rendering this blogcomponent  */}
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/blog' render={() => <BlogComponent />} />
          <Route exact path='/Category' render={() => <Category />} />
          <Route exact path='/Faqs' render={() => <Faqs />} />
          <Route exact path='/Pages' render={() => <Pages />} />
          <Route exact path='/Products' render={() => <Products />} />
          <Route exact path='/Settings' render={() => <Settings />} />
          <Route exact path='/link' render={() => <Link />} />
          <Route exact path='/notification' render={() => <Notification />} />
          <Route exact path='/logout' render={() => <Logout />} />

        </Switch>
      </Box>
    </div>
  );
}
