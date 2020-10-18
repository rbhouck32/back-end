exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "JohnDoe@email.com",
          username: "JohnDoe1",
          password: "password",
        },
      ]);
    });
};
