import db from "~/db/movies/db.server.js";

export async function loader() {
  return db.data.products ?? [];
}
