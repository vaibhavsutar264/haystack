import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { getCookie } from '../../../function';

export default class Sidebar extends Component {
    render() {
      //   let role = getCookie("role");
        return (
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            {/* <a className="nav-link active" href="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                Dashboard
                            </a> */}

                            {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseShops" aria-expanded="false" aria-controls="collapseShops">
                                <div className="sb-nav-link-icon"><i className="fas fa-store" /></div>
                                Vendors
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseShops" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/shop/list">list</a>
                                    <a className="nav-link sub_nav_link" href="/admin/shop/create">create</a>
                                    <a className="nav-link sub_nav_link" href="/admin/vendor/product/list">Product</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                                <div className="sb-nav-link-icon"><i className="fas fa-box" /></div>
                                Products
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseProducts" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/product/list">All Products</a>
                                    <a className="nav-link sub_nav_link" href="/admin/product/create">Add Product</a>
                                    <a className="nav-link sub_nav_link" href="/admin/product/more-photo">Add More Image</a>
                                </nav>
                            </div> */}
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">
                                <div className="sb-nav-link-icon"><i className="fas fa-list" /></div>
                                Categories
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseCategories" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/category/list">All Categories</a>
                                    <a className="nav-link sub_nav_link" href="/admin/category/create">Add Category</a>
                                    <a className="nav-link sub_nav_link" href="/admin/category/sub-create">Add Sub-Category</a>
                                    <a className="nav-link sub_nav_link" href="/admin/category/sub-child-create">Add Child-Category</a>

                                </nav>
                            </div>
                            {/* <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-newspaper" /></div>
                                Posts
                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="posts.html">All Posts</a>
                                    <a className="nav-link sub_nav_link" href="add_post.html">Add New</a>
                                    <a className="nav-link sub_nav_link" href="post_categories.html">Categories</a>
                                    <a className="nav-link sub_nav_link" href="post_tags.html">Tags</a>
                                </nav>
                            </div>


                            <a className="nav-link" href="/admin/setting">
                                <div className="sb-nav-link-icon"><i className="fas fa-cart-arrow-down" /></div>
                                Orders
        </a>
                            <a className="nav-link" href="customers.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                Customers
        </a>
                            <a className="nav-link" href="pages.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                                Pages
        </a>
                            <a className="nav-link" href="menu.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-layer-group" /></div>
                                Menu
        </a>


                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                                <div className="sb-nav-link-icon"><i className="fas fa-cog" /></div>
                                Setting
          <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </a>
                            <div className="collapse" id="collapseSettings" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link sub_nav_link" href="/admin/setting/setting-list">General Settings</a>
                                    <a className="nav-link sub_nav_link" href="/admin/category/create">cvff Settings</a>
                                </nav>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}
