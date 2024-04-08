export class DataLoader {
    
    private attributtes: any

    constructor(){
        this.attributtes = this.loaddata()
    }

    private async loaddata(){
        const response =  await fetch("../../../../assets/jsons/InfoTaller.json")
        const json = await response.json()
        const InfoTaller =  await json.data

        return InfoTaller.attributes
    }

    getAttributes(){
        return this.attributtes
    }
}