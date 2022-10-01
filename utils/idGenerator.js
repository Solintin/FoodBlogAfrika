const autoIncrement = require("mongoose-auto-increment");
const mongoose  = require("mongoose");

const idGenerator = (model, schema) => {
  autoIncrement.initialize(mongoose.connection);
  schema.plugin(autoIncrement.plugin, {
    model: model, // collection or table name in which you want to apply auto increment
    field: "_id", // field of model which you want to auto increment
    startAt: 1, // start your auto increment value from 1
    incrementBy: 1, // incremented by 1
  });
};

module.exports = idGenerator;
