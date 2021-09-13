import React, {useState, useRef} from 'react';


interface Props {
  text: string;
  ok?: boolean //* tanda ? artinya optional
  fn?: (anotherText: string) => string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  textNode: string;
}

//* REact.FC = funct component
export const TextField: React.FC<Props> = ({handleChange}) => { //* component texfield memiliki props di interface, text tipe string

  //*Hooks
  const  [count, setCount] = useState<number | null | undefined>(5); //* 5 sebagai initial state

  setCount(null)
  
  //*bentuk 2
  // const [display, setDisplay] = useState<TextNode>({textNode: 'hello'});

  // setDisplay({textNode});

  //*useRef Hooks
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input  ref={inputRef} onChange={handleChange}/>
    </div>
  )
}