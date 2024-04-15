
export class DataLoader{
	private async loaddata() {
		const response = await fetch(
			'/assets/jsons/InfoTaller.json'
		);
		const json = await response.json();
		const InfoTaller = await json.data;
		return InfoTaller.attributes;
	}

	async getData(){
		const attributes = await this.loaddata()
		return {
			schedule : attributes.Horario,
			address : attributes.Direccion,
			phone : attributes.Telefono,
			email : attributes.Correo,
		}
	}
}
