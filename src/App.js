
// const Button = React.memo(({incrementButton}) => {
//   console.log("filho renderizou")
//   return <button onClick={()=> incrementButton(10)}>+</button>
// });

import { useReducer } from "react";


const globaState = {
  title: 'O título do texto',
  body: 'O conteudo do corpo',
  counter: 0
}

const reducer = (state, action) => {
  console.log(action)
  switch(action.type){
    case 'muda': {
      console.log('chamou o muda', action.payload);
      return {...state, title: action.payload}
    }
    case 'inverte': {
      console.log('chamou o inverte')
      const {title} = state;
      return {...state, title: title.split('').reverse().join('')}
    }
      
  }
  return {...state};
}

function App() {
//estudo useReducer
const [state, dispatch] = useReducer(reducer, globaState);
const {title, body, counter} = state;
  return (
    <div className="App">
      <h1>{title}</h1>
      <h1>{counter}</h1>
      <button onClick={()=> dispatch({type:'muda', payload: new Date().toLocaleDateString('pt-BR')})}>Clique</button>
      <button onClick={()=> dispatch({type:'inverte'})}>INVERTE</button>
    </div>      
  );
  
//   //const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0)
//   //const reverseClass = reverse ? 'reverse' : '';

//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   console.log("pai renderizou")
//   //componentDidUpdate - executa toda vez que o component atualiza
//   // useEffect(() => {
//   //   console.log("componentDidUpdate");
//   // });

//   // //componentDidMount - executa 1x
//   // useEffect(() => {
//   //   console.log("componentDidMount");
//   // },[]);

//   // useEffect(() => {
//   //   console.log(`componentDidMount com dependências ${counter}`);
//   // },[counter]);

//   return (
//     <div className="App">
//      <h1>Contador: {counter}</h1>
//      <Button incrementButton={incrementCounter}/>
//     </div>
//   );
// }

{/* {posts.map(post => {
        return (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      })} */}
}

export default App;
