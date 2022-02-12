import { configureStore } from '@reduxjs/toolkit';

import localeReducer from './features/locale/localeSlice';

const reducer = {
  locale: localeReducer
}

export default configureStore({
  reducer
})