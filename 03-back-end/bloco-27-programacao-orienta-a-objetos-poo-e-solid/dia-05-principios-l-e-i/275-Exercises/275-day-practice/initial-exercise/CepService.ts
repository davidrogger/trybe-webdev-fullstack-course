import CepAPI from './CepAPI';

export default class CepService {
  constructor(private readonly _cepApi: CepAPI) {
    this._cepApi = _cepApi;
  };

  addressByCep(cep: string, num: number) {
    return this._cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this._cepApi.getCepByAddress(address, num);
  }
}
