import './App.css';
import ClickEvent from './components/ClickEvent';
import Form from './components/Form';
import Greet from './components/Greet';
import Hello from './components/Hello';
import ListGroup from './components/List';
import Message from './components/Message';
import Person from './components/Person';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/WelcomeClassComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let phonesPurchasedByMe = ['Nokia Asha 200', 'Microsoft lumia 600', 'Samsung Prime J2', 
  'Samsung A20','Motorola G40 Fusion', 'Samsung S20 FE', 
  'Iphone 14 Pro']

  const handleSelectedItem = (item:string)=>{
    console.log(item);
  }
  return (
    <div className="App">
<<<<<<< Updated upstream

      <ListGroup items ={phonesPurchasedByMe} heading='List of Phones I owned' onSelectedItem={handleSelectedItem}/>
=======
      <Greet />
      <Greet name='Kshitiz Mazumdar'/>
      <Greet name='Kapil Roy' age='22'>
        This is a Child components
      </Greet>
      <Welcome />
      <Hello />
      <hr></hr>
      <hr></hr>
      <Message></Message>
      <hr></hr>
      <ClickEvent />
      <UserGreeting></UserGreeting>
      <hr></hr>
      <Person></Person>
      <hr></hr>
      <Form></Form>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;


{/* <Greet />
<Greet name='Kshitiz Mazumdar'/>
<Greet name='Kapil Roy' age='12'>
  This is a Child components
</Greet>
<Welcome />
<Hello />
<hr></hr>
<hr></hr>
<Message></Message> */}