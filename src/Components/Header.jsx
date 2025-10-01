import reactCoreConcepts from '../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Hi!','Hello!', 'Hey there!'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

 export default function Header(){
  const greeting = reactDescriptions[genRandomInt(2)];
  return(
  <header>    
        <img src={reactCoreConcepts} alt="" />
        <h1>First React App</h1>
        <p>
         {greeting} This is my first React application, and I am excited to learn more about this powerful library!
        </p>
  </header>
  );
}