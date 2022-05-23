// import logo from './logo.svg';
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
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
  text: string
  isComplete: boolean
}

type ActionType = 
  | {type: "ADD", text: string}
  | {type: "REMOVE", id:number}

  //#22 prop drilling
  const Incrementer: React.FunctionComponent<> = () => ({
    
  })
  ///////////////////////////////////////////////////////////////
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
        return [
          ...todos,
          {
            id: todos.length,
            text: action.text,
            isComplete: false,
          }
        ]
      case "REMOVE":
        return todos.filter(({id})=> id !== action.id)
      default:
        throw new Error()
    }
  },
  []
  )

// useEffect
  useEffect(()=>{
    fetch("/payload.json")
    .then(resp => resp.json())
    .then(data =>{
      setPayload(data)
    })
  })

  // useRef
  const newTodoRef = useRef<HTMLInputElement>(null)

  const onAddTodo = useCallback(()=> {
    if (newTodoRef.current){
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = ""
    }

  }, [])

  // No 22 useState Prop Drilling
  const [value, setValue] = useState(0)
   
  return (
    <div>
      <Heading title="Introduction"/>
      <MyComponent>"First component with child"</MyComponent>
      <ListSample items={["one", "two", "three"]}/>
      <AlertList figures={[4,5,6]} onClick={onAlertList}/>
      <MyComponent>"Below is sample of usetate of Payload from JSON"</MyComponent>
      <MyComponent>{JSON.stringify(payload)}</MyComponent>
      <MyComponent>"Below is sample of UseReducer"</MyComponent>
      {todos.map(todo =>(
        <div key={todo.id}>
          {todo.text}
          <button onClick={()=>dispatch({
            type: "REMOVE",
            id: todo.id,
            })}>Remove</button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
