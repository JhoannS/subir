const { Schema, model } = require("mongoose");


const solicitudSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true, 
    },
    correo: {
      type: String,
      require: true,
      trim: true,
    },
    dependencia: {
      type: String,
      require: true,
      trim: true,
    },
    estado: {
      type: String,
      trim: true,
      default: "Pendiente"
    },
    modalidad: {
        type: String,
        trim: true,
        require: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Solicitudes", solicitudSchema);
