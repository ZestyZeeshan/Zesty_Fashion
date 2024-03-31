import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";


const ZestyStore = configureStore({
    reducer:{
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
    }
});

export default ZestyStore;