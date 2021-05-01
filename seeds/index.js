const sequelize = require("../config/connection");
const userSeeds = require("./user-seeds");
const postSeeds = require("./post-seeds");
const commentSeeds = require("./comment-seeds");

const seedAll = async () => {
  await sequelize.sync({
    force: true,
  });
  console.log("\n-- DATABASE IS NOW SYNCED --\n");

  await userSeeds();

  await postSeeds();

  await commentSeeds();

  process.exit(0);
};

seedAll();
