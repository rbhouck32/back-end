exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("firstName", 128).notNullable();
    tbl.string("lastName", 128).notNullable();
    tbl.varchar("email", 128).notNullable().unique();
    tbl.varchar("username", 128).notNullable().unique();
    tbl.varchar("password", 128).notNullable();
  });
  //   .createTable("favorites", tbl => {

  //   })
};

exports.down = function (knex) {};
