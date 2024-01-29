const { Schema, model } = require("mongoose");

const bannerSchema = new Schema(
  {
    nombre_img: {
      type: String,
      required: true,
    },
    binario_img: {
      type: Buffer,
      required: true,
    },
    tipo: {
      type: String,
      enum: ["image/jpeg", "image/png"],
    },
    tamaño: {
      type: Number,
      
    },
    hipervinculo: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Banner", bannerSchema);
