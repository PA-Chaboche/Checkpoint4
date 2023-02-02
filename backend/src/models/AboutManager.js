const AbstractManager = require("./AbstractManager");

module.exports = class PageManager extends AbstractManager {
  constructor() {
    super({ table: "about" });
  }

  insert(about) {
    return this.connection.query(`insert into ${this.table} SET ?`, [about]);
  }

  update(about) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      about,
      about.id,
    ]);
  }
};
