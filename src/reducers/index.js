import { combineReducers } from 'redux';

import article from './article';
import editor from './editor';
import remoteArticle from './remoteArticle';

export default combineReducers({
  article,
  editor,
  remoteArticle,
});
