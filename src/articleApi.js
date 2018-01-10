import * as firebase from 'firebase';
import config from './config';

export default class ArticleApi {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database();
  }

  all() {
    return this.db
      .ref('articles')
      .once('value')
      .then(articles => {
        return articles.val();
      });
  }

  put(article) {
    const { id, date, title, contents } = article;
    return this.db.ref('articles/' + id).set({
      date,
      title,
      contents,
    });
  }
}
