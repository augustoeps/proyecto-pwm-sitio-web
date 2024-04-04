document.addEventListener("DOMContentLoaded", async function () {
	await cargarEstructura();
	await cargarFuncionalidad();
});

async function cargarEstructura() {
	let appBody = document.querySelector("body");
	await cargarComponente(appBody, "../../componentes/Cabecera/");
	await cargarComponente(appBody, "../../componentes/Servicio/");
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

async function cargarFuncionalidad() {
	let appBody = document.querySelector("html");
	await cargarScript(appBody, "../../componentes/Cabecera/");
	await cargarInfoServicio()
}

async function cargarScript(body, url) {
	const scriptElement = document.createElement("script");
	scriptElement.src = url + "script.js";
	body.appendChild(scriptElement);
}

async function cargarInfoServicio(){
	const response =  await fetch("../../../resources/jsons/Servicios.json")
	const json = await response.json()
	const servicios =  await json.data
	const ServiceTitleElement = document.getElementById("service")
	const PriceElement = document.getElementById("price")
	const DescriptionElement = document.getElementById("Description")
	const attributes = servicios[0].attributes

	ServiceTitleElement.innerText = attributes.Title
	PriceElement.innerText = attributes.Precio
	DescriptionElement.innerText = attributes.Descripcion
}

