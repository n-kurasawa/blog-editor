const DB_STORE_NAME = 'articles';

export default class ArticleDb {
  constructor() {
    this.db = null;
  }

  save(article) {
    return this._open().then(
      () =>
        new Promise((resolve, reject) => {
          if (this.db === null) {
            console.error('db is null');
            reject('db is null');
            return;
          }

          let request = this._store('readwrite').put(article);

          request.onsuccess = e => {
            article.id = e.target.result;
            resolve(article);
          };

          request.onerror = e => {
            console.error(e);
            reject(e);
          };
        }),
    );
  }

  delete(id) {
    return this._open().then(
      () =>
        new Promise((resolve, reject) => {
          if (this.db === null) {
            console.error('db is null');
            reject('db is null');
            return;
          }

          let request = this._store('readwrite').delete(id);

          request.onsuccess = e => {
            resolve(id);
          };

          request.onerror = e => {
            reject(e, id);
          };
        }),
    );
  }

  all() {
    return this._open().then(
      () =>
        new Promise((resolve, reject) => {
          if (this.db === null) {
            console.error('db is null');
            reject('db is null');
            return;
          }

          let request = this._store('readonly').openCursor();
          let articles = [];
          request.onsuccess = e => {
            let cursor = e.target.result;
            if (cursor) {
              articles.push(cursor.value);
              cursor.continue();
            } else {
              resolve(articles);
            }
          };

          request.onerror = e => {
            reject(e);
          };
        }),
    );
  }

  _open() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve();
        return;
      }
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
        resolve();
      };

      request.onerror = e => {
        console.error('DB [ oepn ]: Error, ' + e.target.error.message);
        reject(e);
      };
    });
  }

  _store(mode) {
    let transaction = this.db.transaction(DB_STORE_NAME, mode);
    return transaction.objectStore(DB_STORE_NAME);
  }
}
