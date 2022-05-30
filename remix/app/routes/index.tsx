import { LoaderFunction } from "@remix-run/node";
import { useLoaderData,json,Link } from "@remix-run/react";
import pokemon, {Pokemon} from "~/lib/pokemon";

export let loader: LoaderFunction = () => {
  return pokemon.slice(0,10)
}

export default function Index() {
  let data = useLoaderData<Pokemon[]>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Pokemon</h1>
      <ul>
        {data.map((p)=>(
          <li key={p.id}>
            <Link to={`/pokemon/${p.name}`}>
              <div>
                <img src={`/pokemon/${p.name.toLowerCase()}.jpg`}/>

              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
