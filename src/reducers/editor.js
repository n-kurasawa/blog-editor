export const EDITOR = {
  SELECT: 'editor/select',
};

const initialState = {
  content: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EDITOR.SELECT:
      return {
        content: action.content,
      };
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
