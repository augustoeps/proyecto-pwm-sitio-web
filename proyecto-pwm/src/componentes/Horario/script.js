cargarInfoHorario()
async function cargarInfoHorario(){
    const response =  await fetch("../../../resources/jsons/InfoTaller.json")
    const json = await response.json()
    const InfoTaller =  await json.data
    const HorarioElement = document.getElementById("TextHorario")
    const AddressElement = document.getElementById("TextAddress")
    const PhoneNumberElement = document.getElementById("PhoneNumber")
    const EmailAddressElement = document.getElementById("EmailAddress")

    const attributes = InfoTaller.attributes

    HorarioElement.innerText = attributes.Horario
    AddressElement.innerText = attributes.Direccion
    PhoneNumberElement.innerText = attributes.Telefono
    EmailAddressElement.innerText = attributes.Gmail
}