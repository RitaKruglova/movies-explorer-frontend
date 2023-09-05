import { ResponseError } from "./responseError";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new ResponseError(res.status));
}

