import * as firebase from 'firebase';
import config from './config';
import { password, email } from './config';

export default class ArticleApi {
  constructor() {
    firebase.initializeApp(config);
    this.auth();
    this.db = firebase.database();
  }

  auth() {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.error(error.message);
      });
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
      id,
      date,
      title,
      contents,
    });
  }
}
