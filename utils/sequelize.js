import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://ukntohcv:SdSyAeypC8EDghCIQV5xJ-T2QDalH24g@tiny.db.elephantsql.com/ukntohcv",

  {
    logging: true,
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection database");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
