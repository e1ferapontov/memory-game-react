/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Wed Sep 05 2018
 *  File : configureStore.js
 *******************************************/

import { createStore } from 'redux'
// redux persist store
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// reducer
import { rootReducer } from './Reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer);
export const {persistor, store} = (() => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
})();