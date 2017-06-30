/**
 * Created by Administrator on 2017/6/22.
 */
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "../reducer/IndexReducer"

const middleware = applyMiddleware(logger, thunk);

export default createStore(reducers, middleware);
