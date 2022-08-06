interface CepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(cep: string, number: number): Promise<string>;
}