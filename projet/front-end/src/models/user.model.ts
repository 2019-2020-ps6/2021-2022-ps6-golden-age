export interface Configurations{
  size: number;
  volume: string;
  voice: string;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    config: Configurations;
}
