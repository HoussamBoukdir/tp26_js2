import Personne, {personnes} from "./Personne.js";

let somme=personnes.reduce((s, p) => {
     return s +=p.age;
    }, 0)
console.log(somme);

