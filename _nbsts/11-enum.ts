//*bentuk pertama
// const beforeLoading = "before load"
// const loading = "loading"
// const loaded = " loaded"

enum LoadingState {
  beforeLoading = "before load",
  loading = "loading",
  loaded = " loaded"
}

const isLoading = (state: LoadingState) => state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoading)); //* false
