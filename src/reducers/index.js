import { combineReducers } from 'redux';

import article from './article';
import editor from './editor';

export default combineReducers({
  article,
  editor,
});
