const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const campeonesSchema = new Schema(
  {
    nombre: {
        type: String,
        required: true
    },
    rol: {
      type: String,
      required: true
    },
    daño: {
      type: String,
      required: true
    },
    region: {
      type: String,
      requied: true
    }
  }
);

const Campeon = mongoose.model("Campeon", campeonesSchema);
module.exports = { Campeon };
