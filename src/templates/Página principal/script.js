document.addEventListener("DOMContentLoaded", async function () {
	await cargarEstructura();
});

async function cargarEstructura() {
	let appBody = document.querySelector("body");
	await cargarComponente(appBody, "../../componentes/Cabecera/");
	await cargarComponente(appBody, "../../componentes/Horario/");
	await cargarComponente(appBody, "../../componentes/Footer/");
}

async function cargarComponente(body, url) {
	document.head.appendChild(await cargarEstilo(url));
	body.appendChild(await cargarTemplate(url));
}

async function cargarTemplate(url) {
	let response = await fetch(url + "index.html");
	let text = await response.text();

	let template = document.createElement("template");
	template.innerHTML = text;

	return document.importNode(template.content, true);
}

async function cargarEstilo(url) {
	var linkElement = document.createElement("link");

	linkElement.href = url + "style.css";
	linkElement.rel = "stylesheet";

	return linkElement;
}
