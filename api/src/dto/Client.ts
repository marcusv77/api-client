export interface IClient {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  cpf: string;
}

export interface IRequestCreateClient {
  name: number;
  address: string;
  phone: string;
  email: string;
  cpf: string;
}
