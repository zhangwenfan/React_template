/**
 * Created by Administrator on 2017/6/1.
 */

import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./components/redux/store/Store";
import Layout from "./components/public/Layout";


const app = document.getElementById("app");
window.baseUrl = "http://localhost:8080/firAjax";

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <div>
      {/*加上Swich之后从上向下匹配, 匹配到了之后就不往下了, 所以在这个例子里面先匹配到*/}
      {/*"/gfs/:name/id/:id", 就不往下匹配了. 如果换一个位置, 把"/gfs/:name/id/:id"*/}
      {/*放到"/gfs/:name"之后, 就会陪陪不出"/gfs/:name/id/:id". */}
      <Switch>
        <Route exact path="/" component={Layout}/>
        {/*<Route path="/gfs/name" component={Sowon}/>*/}
        {/*<Route path="/gfs/:name/id/:id" component={Sowon}/>*/}
        {/*<Route path="/gfs/:name" component={Person}/>*/}
        {/*<Route path="/users/:username" component={User}/>*/}
        {/*<Route path="/testFlux" component={Gfs}/>*/}
        {/*<Route path="/testRedux" component={TestRedux}/>*/}
      </Switch>
    </div>
  </HashRouter>
  </Provider>, app);




