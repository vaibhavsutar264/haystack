import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import List from './list';
// import List from './main-category';
// import MainCategory from './create';
import MainCategory from './main-category';
// import SubCategory from './create/sub-category';
// import SettingList from '../setting/setting-list';
import SubChildCategory from './create/child-category';


export default class Category extends Component {
    render() {
        const { match } = this.props;
        return (
            <div id="layoutSidenav_content">
                <main>
                    <Switch>
                        {/* here math.prop is just a url in http it is not related to any components */}
                        <Route path={[`${match.path}/list`]} component={List} />
                        <Route path={[`${match.path}/create`]} component={MainCategory} />
                        {/* <Route path={[`${match.path}/sub-create`]} component={SettingList} /> */}
                        {/* <Route path={[`${match.path}/sub-child-create`]} component={SubChildCategory} /> */}
                    </Switch>
                </main>
            </div>
        );
    }
}
