document.addEventListener('DOMContentLoaded', async function() {
    await cargarEstructura();
    await cargarEstilo();
});


async function cargarEstructura() {
    let appBody = document.querySelector("body");
    cargarComponente(appBody, '../../componentes/Cabecera/');
    cargarComponente(appBody, '../../componentes/Horario/');
    cargarComponente(appBody, '../../componentes/Footer/');
}



async function cargarComponente(body, url) {
    body.appendChild(await cargarTemplate(url))
    document.head.appendChild(await cargarEstilo(url));
}



async function cargarTemplate(url) {
    let response = await fetch(url+"index.html");
    let text = await response.text();

    let template = document.createElement('template');
    template.innerHTML = text;

    return document.importNode(template.content, true);
}

async function cargarEstilo(url){
    var linkElement = document.createElement("link");

    linkElement.href = url+"style.css";
    linkElement.rel = "stylesheet";

    return linkElement;
}