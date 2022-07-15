//building loose autocomplete for vscode

//when we want partial autocomplete

//1 first form
// type IconSize = "small" | "medium" | "large";

interface IconProps {
  size: IconSize;
}

//2nd form
// type IconSize = "small" | "medium" | Omit<string, "small" | "medium">;

//3rd form
type IconSize = LooseAutocomplete<"small" | "medium" | "large">;

//helper/ utility autocomplete
type LooseAutocomplete<T extends string> = T | Omit<string, T> 


export const Icon = (props:IconProps)  => {
  return (
  <>
  <Icon size="medium"></Icon>
  </>);
}


const Component = () => {
  return (
    <div>
    <Icon size="" /></Icon>//ctrl + space on "" to see autocomplete
    </div>
    
    )

}
