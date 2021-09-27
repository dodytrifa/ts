import houses from './_houses'

  //*define sesuai file
  interface House {
    name: string,
    planets: string | string[]
  }
  



  interface HouseWithID {
    name: string,
    planets: string | string[]
    id: number
  }
  
  // function findHouses(houses: string): HouseWithID[];

  // function findHouses(
  //   houses: string,
  //   filter: (house: House) => boolean
  // ): HouseWithID[];
  
  // function findHouses(houses: House[]): HouseWithID[];
  
  // function findHouses(
  //   houses: House[],
  //   filter: (house: House) => boolean
  // ): HouseWithID[];
  
  // console.log(
  //   findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
  // );
  
  // console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
