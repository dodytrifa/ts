// import logo from './logo.svg';
import React, {useCallback, useEffect, useReducer, useState} from 'react';
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

const ListSample: React.FunctionComponent<{
  items: string[];

}> = ({items}) =>(
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)

const AlertList: React.FunctionComponent<{
  figures: number[];
  onClick?: (figure: number) => void
}> = ({figures, onClick})=>(
  <ul>
  {figures.map((figure, index)=>(
    <li key={index} onClick={() => onClick?.(figure)}>
      {figure}
    </li>
  ))}
  </ul>
) 

interface Payload {
  text: string
}

interface Todo {
  id:number
  todo: string
  quantity: number
  isComplete: boolean
}

type ActionType = 
  | {type: "ADD", text: string}
  | {type: "REMOVE", id:number}

function App() {
  const onAlertList = useCallback((figure:number)=>{
    alert(figure)
  },[])

  // useState
  const [payload, setPayload] = useState<Payload | null>(null)

  // UseReducer
  const [todos, dispatch] = useReducer((todos: Todo[], action: ActionType)=> {
    switch(action.type){
      case "ADD":
    }
  }[])


  useEffect(()=>{
    fetch("/payload.json")
    .then(resp => resp.json())
    .then(data =>{
      setPayload(data)
    })
  })

  return (
    <div>
      <Heading title="Introduction"/>
      <MyComponent>"First component with child"</MyComponent>
      <ListSample items={["one", "two", "three"]}/>
      <AlertList figures={[4,5,6]} onClick={onAlertList}/>
      <MyComponent>"Below is sample of usetate of Payload from JSON"</MyComponent>
      <MyComponent>{JSON.stringify(payload)}</MyComponent>
    </div>
  );
}

export default App;
