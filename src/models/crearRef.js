const { Schema, model} = require("mongoose");

const refSchema = new Schema(
  {
    referencia: {
      type: Number,
      require: true,
      trim: true,
    },
    numero_carpetas:{
      type: Number,
      trim: true,
    },
    caja:{
      type: Number,
      require: true,
      trim: true,
    },
    oficina: {
      type: String,
      require: true,
      trim: true,
    },
    nombre_serie: {
      type: String,
      require: true,
      trinombre_subseriem: true,
    },
    nombre_subserie: {
      type: String,
      require: true,
      trim: true,
    },
    entrepano: {
      type: Number,
      require: true,
      trim: true,
    },
    estante: {
      type: Number,
      require: true,
      trim: true,
    },
    cuerpo: {
      type: String,
      require: true,
      trim: true,
    },
    pasillo: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("BD_gestion_documental", refSchema);
