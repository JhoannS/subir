const $tiempo = document.querySelector(".hora"),
  $fecha = document.querySelector(".dia");

function Relojdigital() {
  let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth(),
    anio = f.getFullYear();

  dia = ("0" + dia).slice(-2);

  let timeString = f.toLocaleTimeString();
  $tiempo.innerHTML = timeString;

  let mesN = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let showMes = mesN[mes];
  $fecha.innerHTML = ` ${dia} ${showMes} , ${anio}`;
}
setInterval(() => {
  Relojdigital();
}, 1000);


   //crear
   const open = document.getElementById('open');
   const modal_container = document.getElementById('modal_container');
   const close = document.getElementById('close');

   open.addEventListener('click', () => {
       modal_container.classList.add('show');
   });

   close.addEventListener('click', () => {
       modal_container.classList.remove('show');
   });