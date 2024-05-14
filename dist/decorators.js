"use strict";
/*function logger(prefix: string){
    return(target: any) => {
       console.log(`${prefix} - ${target}`);
}
}
    @logger(`hey dude`)
    class Foo {}*/
/*function setAPIversion (apiVersion: string){
  return(target: any) =>{
      return class extends target{
          version = apiVersion
      }
  }
}
@setAPIversion('1.00')
class API {}
console.log(new API);
function minLength(length: number){
  return (target: any, key: string) => {
      
      let val = target[key];
      
      const getter = () => val;
      console.log(typeof target, key);
      const setter = (value: string) =>{
          if(value.length < length){
              console.log(`Erro! Não possui caracteres suficientes`);
          } else{
              val = value;
          }
      }
      Object.defineProperty (target, key,{
          get: getter,
          set: setter,
      })
  }

 }

 


class Movie {
  @minLength(5)
  title: string;

  constructor (t: string){
      this.title = t;
  }
}

const movie = new Movie("Car");




*/
