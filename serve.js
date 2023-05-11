const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema", "root", "s_qs@ym_i#22", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("users", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

sequelize
  .sync()
  .then(() => console.log("Users table created successfully."))
  .catch((error) => console.log(`Error creating users table: ${error}`));

User.create({
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  age: 30,
})
  .then((user) => console.log(`User created with ID: ${user.id}`))
  .catch((error) => console.log(`Error creating user: ${error}`));

User.findAll()
  .then((users) => console.log(users))
  .catch((error) => console.log(`Error reading users: ${error}`));
