const LOAD = 'remoteArticle/load';
const UPLOAD = 'remoteArticle/upload';

const initialState = {
  articles: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
    case UPLOAD:
    default:
      return state;
  }
}

export function upload(article) {
  return (dispatch, getState, client) => {
    client.put(article).then(() => {
      dispatch({ type: UPLOAD, data });
    });
  };
}
