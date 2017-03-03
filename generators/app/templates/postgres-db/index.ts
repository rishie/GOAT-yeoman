"use strict";
import config from "../../config";
import Sequelize from "sequelize";
import sqlSeed from "./seed";

//initilize the database
let sequelize = new Sequelize(config.postgres.database, config.postgres.username, config.postgres.password, config.postgres.options);

export default sequelize;

// Initialize sequelize
export function postgresConnect() {
  sequelize.sync().then(function() {

      // seed sequelize
      if (config.seedDB) {
        process.env.NODE_ENV === 'production' ? sqlSeed('prod') : sqlSeed();
      }

  });
};

export function postgresDisconnect() {

};