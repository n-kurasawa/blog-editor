const SELECT = 'editor/select';
const TITLE = 'editor/title';
const CONTENTS = 'editor/contents';

const initialState = {
  id: '',
  date: '',
  title: '',
  contents: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT:
      const { id, date, title, contents } = action.article;
      return Object.assign({}, state, {
        id,
        date,
        title,
        contents,
      });
    case TITLE:
      return Object.assign({}, state, { title: action.title });
    case CONTENTS:
      return Object.assign({}, state, { contents: action.contents });
    default:
      return state;
  }
}

export function select(article) {
  return {
    type: SELECT,
    article,
  };
}

export function changeTitle(title) {
  return {
    type: TITLE,
    title,
  };
}

export function changeContents(contents) {
  return {
    type: CONTENTS,
    contents,
  };
}
