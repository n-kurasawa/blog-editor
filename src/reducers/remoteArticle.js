const LOAD = 'remoteArticle/load';
const UPLOAD = 'remoteArticle/upload';

const initialState = {
  articles: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { articles: action.articles };
    case UPLOAD:
    default:
      return state;
  }
}

export function remoteLoad() {
  return (dispatch, getState, client) => {
    client.api.all().then(articles => {
      dispatch({ type: LOAD, articles });
    });
  };
}

export function upload(article) {
  return (dispatch, getState, client) => {
    client.api.put(article).then(() => {
      dispatch({ type: UPLOAD });
    });
  };
}
