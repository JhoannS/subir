const dbCtrl = {};

const dbR = require("../models/crearRef");

dbCtrl.renderDbForm = (req, res) => {
  res.render("database");
};

dbCtrl.createNewDate = async (req, res) => {
  const {
    referencia,
    nombre_serie,
    nombre_subserie,
    numero_carpetas,
    caja,
    oficina,
    entrepano,
    estante,
    cuerpo,
    pasillo,
  } = req.body;
  const newdbR = new dbR({
    referencia,
    nombre_serie,
    nombre_subserie,
    numero_carpetas,
    caja,
    oficina,
    entrepano,
    estante,
    cuerpo,
    pasillo,
  });
  await newdbR.save();
  res.send("new date add full");
};

dbCtrl.renderDb = async (req, res) => {
  const datos = await dbR.find().lean();
  res.render("database", { datos });
};

dbCtrl.renderEditForm = (req, res) => {
  res.send("render edit form");
};

dbCtrl.updateDb = (req, res) => {
  res.send("update db");
};

dbCtrl.deleteDoc = async (req, res) => {
    await dbR.findByIdAndDelete(req.params.id);
    res.redirect('/database')
};

module.exports = dbCtrl;
