import { LoaderFunction,json,MetaFunction } from "@remix-run/node";
import { useLoaderData,Link, useSearchParams, Form } from "@remix-run/react";
import { useState } from "react";
import pokemon, {Pokemon} from "~/lib/pokemon";
 

export let loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") ?? "").toLowerCase();
  return json(
    pokemon.filter(({ name }) => name.toLowerCase().includes(q)).slice(0, 10)
  );
};

export let meta: MetaFunction = () => {
  return {
    title: "Pokemon",
    description: "Pokemon page!",
  };
};

export default function Index() {
  let pokemonList = useLoaderData<Pokemon[]>();
  const [search, setSearch] = useState(useSearchParams()[0].get("q") ?? "");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Pokemon</h1>
      <Form method="get">
        <input 
         type="text" 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         name="q"
        />
        <button type="submit">
          Search
        </button>
      </Form>

      <ul>
        {pokemonList.map((p)=>(
          <li key={p.id}>
            <Link to={`/pokemon/${p.name}`}>
              <div>
                <img src={`/pokemon/${p.name.toLowerCase()}.jpg`}/>
              </div>
              <p>{p.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
