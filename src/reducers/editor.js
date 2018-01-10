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
      return { ...state, ...action.article };
    case TITLE:
      return { ...state, title: action.title };
    case CONTENTS:
      return { ...state, contents: action.contents };
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
