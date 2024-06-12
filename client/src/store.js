import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slice.js'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'persist-key',
    storage
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
const store = configureStore({
    reducer:{
    detail:persistedReducer,
    }, 
})


const persistor = persistStore(store)
 
export {store,persistor}