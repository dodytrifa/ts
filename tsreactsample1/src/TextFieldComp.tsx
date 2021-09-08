import React from 'react';


interface Props {
  text: string;
}

//* REact.FC = funct component
export const TextField: React.FC<Props> = () => { //* component texfield memiliki props text tipe string
  return (
    <div>
      <input  />
    </div>
  )
}