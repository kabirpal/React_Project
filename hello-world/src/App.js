import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/WelcomeClassComponent';

function App() {
  return (
    <div className="App">
      <Greet />
      <Greet name='Kshitiz Mazumdar'/>
      <Greet name='Kapil Roy' age='12'>
        This is a Child components
      </Greet>
      <Welcome />
      <Hello />
      <hr></hr>
      <hr></hr>
      <Message></Message>
    </div>
  );
}

export default App;
