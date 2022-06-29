//imagine we provide some prop type in one of react component
//Form 1 type IconSize = "sm" | "xs" | string


//if you want to pass any other type we can use Omit utility
// type IconSize = "sm" | "xs" | Omit<string, "xs" | "sm">

type IconSize = LooseAutoComplete<"sm" | "xs">

type LooseAutoComplete<T extends string> = T | Omit<string, T>



interface IconProps {
    size: IconSize
}

export const Icon = (props: IconProps) => {
    return
}

const Comp1 = () => {
    return (
        <>
        <Icon size="xs"></Icon>
        <Icon size="something"></Icon>
        </>
    )
}