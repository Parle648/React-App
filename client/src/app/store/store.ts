import { configureStore } from '@reduxjs/toolkit';
import Lists from '../../shared/lib/slices/Lists';

export default configureStore({
    reducer: {
        Lists: Lists,
    }
})