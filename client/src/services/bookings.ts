import { invoke } from "../utls/api-adapter";

export async function getAllBookings() {
  return invoke("api/bookings/", "get", {});
}
