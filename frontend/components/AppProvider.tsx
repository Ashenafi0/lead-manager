"use client"
import React from 'react'
import { Provider } from 'react-redux'
import {store} from "../store/store"

import { ReactNode } from 'react';

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default AppProvider