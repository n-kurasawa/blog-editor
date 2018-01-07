export const LOAD = 'article/load';
export const SAVE = 'article/save';

const initialState = {
  articles: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        articles: action.articles,
      };
    default:
      return state;
  }
}

export function load() {
  return (dispatch, getState, db) => {
    return db.open().then(() => {
      db.all().then(articles => {
        dispatch({ type: LOAD, articles });
      });
    });
  };
}

export function addTestDate() {
  const date = {
    date: '2018-01-01',
    title: 'タイトル1',
    contents: '# hello world',
  };
  return (dispatch, getState, db) => {
    return db.open().then(() => {
      db.save(date).then(article => {
        dispatch({ type: SAVE, article });
      });
    });
  };
}
