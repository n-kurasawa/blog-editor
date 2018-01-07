export const LOAD = 'article/load';

const initialState = {
  articles: [
    {
      id: 1,
      date: '2018-01-01',
      title: 'タイトル1',
      contents: '# hello world',
    },
    {
      id: 2,
      date: '2018-01-01',
      title: 'タイトル2',
      contents: '## hello world',
    },
    {
      id: 3,
      date: '2018-01-01',
      title: 'タイトル3',
      contents: '### hello world',
    },
  ],
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
