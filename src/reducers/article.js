export const ARTICLE = {
  LOAD: 'article/load',
};

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
      date: '2018-01-02',
      title: 'タイトル2',
      contents: '## hello world',
    },
    {
      id: 3,
      date: '2018-01-03',
      title: 'タイトル3',
      contents: '### hello world',
    },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ARTICLE.LOAD:
      return {
        articles: action.results,
      };
    default:
      return state;
  }
}
