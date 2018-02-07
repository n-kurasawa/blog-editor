import { getNow } from '../utils/dateUtil';

export const LOAD = 'article/load';
export const SAVE = 'article/save';
export const REMOVE = 'article/remove';

export default function reducer(state = { articles: [] }, action = {}) {
  switch (action.type) {
    case LOAD:
      return { articles: action.articles };
    case SAVE:
      return { articles: updateArticle(state.articles, action.article) };
    case REMOVE:
      return { articles: removeArticle(state.articles, action.id) };
    default:
      return state;
  }
}

export function load() {
  return (dispatch, getState, client) => {
    client.db.all().then(articles => {
      dispatch({ type: LOAD, articles });
    });
  };
}

export function add() {
  return (dispatch, getState, client) => {
    client.db
      .save({
        date: getNow(),
        title: '',
        contents: '',
      })
      .then(article => {
        dispatch({ type: SAVE, article });
      });
  };
}

export function remove(id) {
  return (dispatch, getState, client) => {
    client.db.delete(id).then(id => {
      dispatch({ type: REMOVE, id });
    });
  };
}

export function updateTitle(id, title) {
  return (dispatch, getState, client) => {
    const { article } = getState();
    const i = updateIndex(article.articles, id);
    if (i === -1) {
      return;
    }
    article.articles[i].title = title;

    client.db.save(article.articles[i]).then(article => {
      dispatch({ type: SAVE, article });
    });
  };
}

export function updateContents(id, contents) {
  return (dispatch, getState, client) => {
    const { article } = getState();
    const i = updateIndex(article.articles, id);
    article.articles[i].contents = contents;

    client.db.save(article.articles[i]).then(article => {
      dispatch({ type: SAVE, article });
    });
  };
}

function updateArticle(articles, article) {
  const i = updateIndex(articles, article.id);
  if (i === -1) {
    return [...articles, article];
  } else {
    return [...articles.slice(0, i), article, ...articles.slice(i + 1)];
  }
}

function removeArticle(articles, id) {
  const i = updateIndex(articles, id);
  if (i === -1) {
    return articles;
  }

  return [...articles.slice(0, i), ...articles.slice(i + 1)];
}

function updateIndex(articles, id) {
  return articles.findIndex(elm => {
    return elm.id === id;
  });
}
