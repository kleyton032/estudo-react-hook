import { createContext, useContext, useReducer } from "react";
import P from 'prop-types';


export const actions = {
  CANGHE_TITLE: 'CANGHE_TITLE',
}
export const globaState = {
  title: 'O título do texto',
  body: 'O conteudo do corpo',
  counter: 0
}

export const reducer = (state, action) => {
  console.log(action)
  switch (action.type){
    case actions.CANGHE_TITLE: {
      console.log("Muda o título")
      return {...state, title: "Mudou o título"}
    }
  }
  return { ...state };
}

export const Context = createContext();
export const AppContext = ({ children }) => {

  const changeTitle = () => {
    dispatch({type: actions.CANGHE_TITLE})
  }

  const [state, dispatch] = useReducer(reducer, globaState);
  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  )
}

AppContext.propTypes = {
  children: P.node,
}

export const H1 = () => {
  const context = useContext(Context);
  return <h1 onClick={()=> context.changeTitle()}>{context.state.title}</h1>
}

function App() {
  //estudo useReducer + useContext
  return (
    <AppContext>
      <div className="App">
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
