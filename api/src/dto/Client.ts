export interface IClient {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  cpf: string;
}

export interface IRequestCreateClient {
  name: string;
  address: string;
  phone: string;
  email: string;
  cpf: string;
}
