import * as firebase from 'firebase';
import config from './config';

export default class ArticleApi {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database();
  }

  put(article) {
    const { id, date, title, contents } = article;
    this.db.ref('articles/' + id).set({
      date,
      title,
      contents,
    });
  }
}
