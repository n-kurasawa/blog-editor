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
    case SAVE:
      return { articles: updateState(state.articles, action.article) };
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

export function add() {
  return (dispatch, getState, db) => {
    db.open().then(() => {
      db
        .save({
          date: getDate(),
          title: '',
          contents: '',
        })
        .then(article => {
          dispatch({ type: SAVE, article });
        });
    });
  };
}

export function updateTitle(id, title) {
  return (dispatch, getState, db) => {
    const { article } = getState();
    const i = updateIndex(article.articles, id);
    if (i === -1) {
      return;
    }
    article.articles[i].title = title;

    db.open().then(() => {
      db.save(article.articles[i]).then(article => {
        dispatch({ type: SAVE, article });
      });
    });
  };
}

export function updateContents(id, contents) {
  return (dispatch, getState, db) => {
    const { article } = getState();
    const i = updateIndex(article.articles, id);
    article.articles[i].contents = contents;

    db.open().then(() => {
      db.save(article.articles[i]).then(article => {
        dispatch({ type: SAVE, article });
      });
    });
  };
}

function updateState(articles, article) {
  const i = updateIndex(articles, article.id);
  if (i === -1) {
    return [...articles, article];
  } else {
    articles[i] = article;
    return articles;
  }
}

function updateIndex(articles, id) {
  return articles.findIndex(elm => {
    return elm.id === id;
  });
}

function getDate() {
  const now = new Date();
  return `${now.getFullYear()}-${format(now.getMonth() + 1)}-${format(
    now.getDate(),
  )}`;
}

function format(num) {
  if (10 > num) {
    return `0${num}`;
  } else {
    return num;
  }
}
