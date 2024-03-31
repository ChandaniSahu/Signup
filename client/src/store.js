import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slice.js'

const store = configureStore({
    reducer:{
    detail:rootReducer,
    }, 
})

export default store 