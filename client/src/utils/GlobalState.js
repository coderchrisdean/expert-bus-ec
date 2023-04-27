import React from "react";
import { Provider } from 'react-redux'
import { configureStore  } from "@reduxjs/toolkit";
import { rootReducer } from './reducers'

const store = configureStore({
reducers: rootReducer
})

const StoreProvider = ({ children }) => {


  return <Provider store={store}> {children} </Provider>;
};


export default StoreProvider;