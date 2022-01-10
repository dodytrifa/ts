import fetch from "node-fetch"

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url:string;
  }[];
}

type fetchPokemonResult<T> = T extends undefined ? Promise<PokemonResults[]> : void

function fetchPokemon<T extends undefined | ((data: PokemonResults[]) => void)>(url: string, cb?: T): fetchPokemonResult<T>{
  if(cb){
    fetch(url)
    .then((resp) => resp.json())
    .then(cb)
    return undefined as fetchPokemonResult<T>
  }else {
    return fetch(url).then(resp =>resp.json()) as fetchPokemonResult<T>
  }
}