//*bentuk pertama
// const beforeLoading = "before load"
// const loading = "loading"
// const loaded = " loaded"

enum LoadingState {
  beforeLoading = "before load",
  loading = "loading",
  loaded = " loaded"
}

const englishLoadingStates = {
  [LoadingState.beforeLoading]: "Before Load"
}

const isLoading = (state: LoadingState) => state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoading)); //* false

//*BENTUK LAIN
enum UserResponse {
  No,
  Yes
}

function respond(recipient: string, message: UserResponse): void {

}

respond("John Doe", UserResponse.Yes)


//*NUMBER LITERAL
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0
  
  for(let i = 0; i <dice; i++){
    pip += Math.floor(Math.random() * 5) + 1
  }
  return pip
}

console.log(rollDice(3));//* angka dibatasi dengan fungsi enum

//* string literal
function callEvent(name: "addToCart", data: {productPrice: number}): void;
function callEvent(name: "checkOut", data: {cartCount: number}): void;
function callEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
  
}

callEvent("checkOut", {cartCount:10})

