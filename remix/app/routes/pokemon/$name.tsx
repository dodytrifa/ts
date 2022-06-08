import { useLoaderData, Link } from "@remix-run/react";
import { useMemo } from "react";
import { LoaderFunction,MetaFunction } from "@remix-run/node";
import pokemon, {Pokemon} from "../../lib/pokemon";


export let handle = {
  title: (params: { name: string }) => params.name,
  breadcrumb: (params: { name: string }) => (
    <Link
      to={`/pokemon/${params.name}`}
    >
      {params.name}
    </Link>
  ),
};

export const loader: LoaderFunction = ({ params }) => {
  return pokemon.find(
    ({ name }) => name.toLowerCase() === (params.name ?? "").toLowerCase()
  );
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data ? data.name : "Oops...",
  };
};

export default () => {
  const data = useLoaderData<Pokemon>();

  const attributes = useMemo(
    () => ({
      HP: data.hp,
      Attack: data.attack,
      Defense: data.defense,
      Type: (data.type.length<2 ? data.type : (data.type).slice(0,2).join(", ")),
      // Type: (data.type.length<2 ? data.type : (data.type).split(",")),
      Speed: data.speed,
      "Special Attack": data.special_attack,
      "Special Defense": data.special_defense,
    }),
    [data]
  );

  return (
    <div >
      <div >
        <img
          src={`/pokemon/${data.name.toLowerCase()}.jpg`}
          alt=""
        />
      </div>
      <div>
      <iframe width="500" height="315" src={`${data.hp}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div>
        <div >
          <div >
            <div >
              <div >
                <table >
                  <thead >
                    <tr>
                      <th
                        scope="col"
                        
                      >
                        Attribute
                      </th>
                      <th
                        scope="col"
                        
                      >
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(attributes).map(([key, value], idx) => (
                      <tr
                        key={key}
                        
                      >
                        <td >
                          {key}
                        </td>
                        <td >
                          {key == "HP" ? <a href={`${data.hp}`} rel="noopener" target="new_tab">Link Lokasi</a> : value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};