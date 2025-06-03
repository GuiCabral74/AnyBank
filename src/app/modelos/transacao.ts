import { nanoid } from "nanoid";

export class Transacao {
readonly id = nanoid();
// readonly id = Math.random().toString(36).substring(2, 15);
readonly data = new Date();

  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ){}
}

  export enum TipoTransacao {
    DEPOSITO = 'Depósito',
    SAQUE ='Saque'
  }

