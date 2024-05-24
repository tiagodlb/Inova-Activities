const textos = ["Tiago <b>Batista</b>", "Minhas <b>Habilidades</b>", "Meus <b>Projetos</b>"]
const atraso = 200;
const textoElemento = document.querySelector("h2");

let contadorDeLetras = 0;

function write() {
  const url = window.location.href;
  let i = 0;
  if (url === "http://127.0.0.1:5500/habilities.html") i = 1
  if (url === "http://127.0.0.1:5500/projects.html") i = 2
  if (contadorDeLetras < textos[i].length) {
    const texto = textos[i]
    textoElemento.innerHTML += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(write, atraso);
  }
  if (contadorDeLetras === textos[i].length) {
    textoElemento.innerHTML = textos[i];
  }
};

function showMenu() {
  const menu = document.querySelector("nav")
  const menuItens = document.querySelectorAll(".header-container");
  menuItens.forEach(item => {
    if (item.style.display === "flex") {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
  (((String(Array((menu.classList)).join(","))).includes("menu-open") ? menu.classList.remove("menu-open") : menu.classList.add("menu-open")));
  console.log(((String(Array((menu.classList)).join(","))).includes("menu-open")))
}

write();  