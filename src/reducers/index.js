import { combineReducers } from 'redux';

import article from './article';
import editor from './editor';
import remoteArticle from './remoteArticle';
import storage from './storage';

export default combineReducers({
  article,
  editor,
  remoteArticle,
  storage,
});
