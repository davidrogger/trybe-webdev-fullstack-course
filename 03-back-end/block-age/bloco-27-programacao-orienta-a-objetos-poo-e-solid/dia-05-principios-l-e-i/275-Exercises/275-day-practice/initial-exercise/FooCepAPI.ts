import CepAPI from "./CepAPI";

export default class FooCepAPI implements CepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP: ${cep}, nº ${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, nº: ${number}" é "CEP baz"`;
  }
}