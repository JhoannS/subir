const { Schema, model } = require("mongoose");


const eliminacionSchema = new Schema(
  {
    estado: {
      type: String,
      default: "vigente",
      trim: true, 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Eliminados", eliminacionSchema);
