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
      return Object.assign({}, state, {
        id: action.content.id,
        date: action.content.date,
        title: action.content.title,
        contents: action.content.contents,
      });
    case EDITOR.TITLE:
      return Object.assign({}, state, { title: action.title });
    case EDITOR.CONTENTS:
      return Object.assign({}, state, { contents: action.contents });
    default:
      return state;
  }
}

export function select(id) {
  return {
    type: EDITOR.SELECT,
    content: {
      id: id,
      date: `2018-01-0${id}`,
      title: `タイトル${id}`,
      contents: '# hello world',
    },
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
