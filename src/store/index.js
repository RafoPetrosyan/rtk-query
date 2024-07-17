import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import usersApi from './users'
import users from './users/reducer.js'


const reducers = {
    users
}

const apiReducers = {
    [usersApi.reducerPath]: usersApi.reducer,
}

export const store = configureStore({
    reducer: {
        ...reducers,
        ...apiReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})

setupListeners(store.dispatch)