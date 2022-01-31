import './App.css';
import Greeting from './Greeting';
import Image from './Image';

function App() {
  return (
    <main>
      <Greeting name='Dvd' lastName='Rogger'/>
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
    </main>
  );
}

export default App;
