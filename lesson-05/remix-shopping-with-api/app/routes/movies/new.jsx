import Button from "~/components/Button";
import Breadcrumb from "~/components/Breadcrumb";
import { Links } from "remix";


export default function NewMovie(){
    
  return(
      <>
      <Breadcrumb links={[{ to: "/movies", title: "Movies" }]} />
    <form method="post">
    <input type="text" id="title" name="title" placeholder="enter title"/>
    <textarea type="text" id="description" name="description" placeholder="enter description"></textarea>
    <input type="text" id="director" name="director" placeholder="enter director name"/>
    <input type="text" id="url" name="url" placeholder="enter image url"/>
    <Button type="submit">
        Create new movie
    </Button>
    </form>
    </>
    );
}