const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true, 
    },
    rol: {
      type: String,
      require: true,
      trim: true,
    },
    correo: {
      type: String,
      require: true,
      trim: true,
    },
    contraseña: {
      type: String,
      require: true,
      trim: true,
    },
    area_encargada: {
      type: String,
      require: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

usuarioSchema.methods.encrypPassword = async contraseña => {
    const salt = await bcrypt.gentSalt(10);
    return await bcrypt.hash(contraseña, salt);
};

usuarioSchema,methods.matchPassword = async function(contraseña) {
    return await bcrypt.compare(contraseña, this.contraseña);
}

module.exports = model("Usuario", usuarioSchema);
