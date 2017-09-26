/**
 * Created by 0easy-23 on 2017/9/1.
 * 油路配置（方便本地打包，使用了HashRouter）;
 * tips:开发环境下面使用了browserHistory，打包上线的时候需要服务器进行配置;
 */
import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../containers/Home/Index';
import Login from '../containers/User/Login';
import City from '../containers/Home/City';
import Album from '../containers/Home/Album';
import Play from '../containers/Play/Play';
import AlbumList from '../containers/Album/AlbumList';
import Player from '../containers/Play/Player'
const Routes = () => (
    <div className="app">
        <Player/>
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/city" component={City}/>
                <Route path="/album/:id" component={Album}/>
                <Route path="/album" component={AlbumList}/>
                <Route path="/play/:id" component={Play}/>
                <Redirect from="/undefined" to={{pathname: '/', search: '?mold=redirect'}}/>
            </Switch>
        </Router>
    </div>
);
export default Routes;