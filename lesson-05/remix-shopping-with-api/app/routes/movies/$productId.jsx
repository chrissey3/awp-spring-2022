import { useLoaderData, link } from "remix";
import { redirect } from "remix";
import Breadcrumb from "~/components/Breadcrumb";
import PageHeader from "~/components/PageHeader";
import Button from "~/components/Button";


export async function loader({params}){
   const product = await fetch(
    `http://10.44.130.51:3000/api/movies/${params.productId}`
    );
   if(!product){
       throw new Error("Movie does not exist");
   }
   return product;
};

export const action = async function ({ request, params }) {
    const form = await request.formData();
    if (form.get("_method") === "delete") {
    await fetch(`http://10.44.130.51:3000/api/movies/${params.productId}`, {
          header: {
              "content-type": "application/json"
          },
          method: 'DELETE'
      });
    
    return redirect("../movies");
  }
      
    
  };

export default function MovieDetail(){
    const movie = useLoaderData();

    return(
        <div className="w-1/4">
        <Breadcrumb links={[{to: "/movies", title: "Movies"}]} />
        <div className="flex justify-between items-baseline">
        <PageHeader title={movie.title} />
        <p className="font-semibold text-lg">{movie.rating}</p>
        </div>
        <img src={movie.cover_url} />
        <p className="text-gray-500">{movie.director}</p>
        <p>{movie.description}</p>

        <form method="post" className="mt-5 pt-2 border-t border-gray-200">
        <input type="hidden" name="_method" value="delete" />
        <Button type="submit" destructive>
          Delete
        </Button>
        </form>
        </div>
    )
}