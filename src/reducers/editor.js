export const EDITOR = {
  SELECT: 'editor/select',
  TITLE: 'editor/title',
  CONTENTS: 'editor/contents',
};

const initialState = {
  id: '',
  date: '',
  title: '',
  contents: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EDITOR.SELECT:
      const { id, date, title, contents } = action.article;
      return Object.assign({}, state, {
        id,
        date,
        title,
        contents,
      });
    case EDITOR.TITLE:
      return Object.assign({}, state, { title: action.title });
    case EDITOR.CONTENTS:
      return Object.assign({}, state, { contents: action.contents });
    default:
      return state;
  }
}

export function select(article) {
  return {
    type: EDITOR.SELECT,
    article,
  };
}

export function changeTitle(title) {
  return {
    type: EDITOR.TITLE,
    title,
  };
}

export function changeContents(contents) {
  return {
    type: EDITOR.CONTENTS,
    contents,
  };
}
