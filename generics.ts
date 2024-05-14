//Generics 
//- reutilização do código
/*//- tornar os métodos mais genéricos
//- Aceitem diferentes tipos de entradas
//- flexibilidade

function useState<S extends number | string>(){
   let state: S;

   function getState(){
   return state;
}
   function setState(newState: S){
   state = newState;
}

    return {getState, setState};
}

const newState = useState<number>();

newState.setState(456);
console.log(newState.getState());

newState.setState(456);
console.log(newState.getState());*/
