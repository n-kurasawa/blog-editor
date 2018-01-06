const DB_STORE_NAME = 'articles';

export default class ArticleDb {
  constructor() {
    this.db = null;
  }

  store(mode) {
    let transaction = this.db.transaction(DB_STORE_NAME, mode);
    let store = transaction.objectStore(DB_STORE_NAME);
    return store;
  }

  open() {
    let request = window.indexedDB.open('db', 1);
    request.onupgradeneeded = e => {
      console.log('DB [ oepn ]: Success, Upgrade');

      let db = e.target.result;
      db.createObjectStore(DB_STORE_NAME, {
        keyPath: 'id',
        autoIncrement: true,
      });
    };

    request.onsuccess = e => {
      console.log('DB [ oepn ]: Success');
      this.db = e.target.result;
    };

    request.onerror = e => {
      console.log('DB [ oepn ]: Error, ' + e);
    };
  }

  save(article, callback) {
    if (this.db === null) {
      return;
    }
    let request = this.store('readwrite').put(article);

    request.onsuccess = e => {
      article.id = e.target.result;
      if (callback) {
        callback(null, article);
      }
    };

    request.onerror = e => {
      console.error(e);
      if (callback) {
        callback(e, article);
      }
    };
  }

  delete(id, callback) {
    if (this.db === null) {
      return;
    }
    let request = this.store('readwrite').delete(id);

    request.onsuccess = e => {
      if (callback) {
        callback(null, id);
      }
    };

    request.onerror = e => {
      if (callback) {
        callback(e, id);
      }
    };
  }

  all(callback) {
    if (this.db === null) {
      return;
    }
    let request = this.store('readonly').openCursor();
    let articles = [];
    request.onsuccess = e => {
      let cursor = e.target.result;
      if (cursor) {
        articles.push(cursor.value);
        cursor.continue();
      } else if (callback) {
        callback(null, articles);
      }
    };

    request.onerror = e => {
      if (callback) {
        callback(e);
      }
    };
  }
}
