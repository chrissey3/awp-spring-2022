import db from "~/db/movies/db.server.js";

export async function loader({ params }) {
  const product = db.data.products?.find((p) => p.id === params.productId);
  return product;
}

export async function action({request, params}){
   switch (request.method){
     case "DELETE": {
      db.data.products = db.data.products.filter((p) => p.id !== params.productId);
      db.write();
     }
   }
    
}
