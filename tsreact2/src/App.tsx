// import logo from './logo.svg';
import React from 'react';
import './App.css';

//1 create component with prop
const Heading = (props: {title:string}) => <h2>{props.title}</h2>

//* const Heading = ({title}: {title:string}) => <h2>{title}</h2>

// type 
const MyComponent= ({children}:{children: React.ReactNode}) => (
  <div>
    {children}
    </div>
) 

// const ListSample: React.FunctionComponent = () =>(
//   <ul>

//   </ul>
// )

function App() {
  return (
    <div>
      <Heading title="Introduction"/>
      <MyComponent>"First component with child"</MyComponent>
      {/* <ListSample></ListSample> */}
    </div>
  );
}

export default App;
