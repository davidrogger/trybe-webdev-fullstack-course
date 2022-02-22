import './App.css';
import Fieldset from './components/Fieldset';
import FieldPreview from './components/FieldPreview';

function App() {
  return (
    <main className='main-container'>
      <h1>Formulário</h1>
      <section className='display-container'>
        <Fieldset />
        <FieldPreview />
      </section>
    </main>
  );
}

export default App;
