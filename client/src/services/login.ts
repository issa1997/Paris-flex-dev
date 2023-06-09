import { invoke } from "../utls/api-adapter";

export type LoginType = {
  email: string;
  password: string;
};

export async function login(login: LoginType) {
  return invoke("api/users/login", "post", login);
}
