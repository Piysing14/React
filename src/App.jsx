import Counter from '../Counter';
import './App.css'
import Parent from './Parent';


function App() {
 let data="This is a parent prop"


  return (
  <>
<h1>This is App h1</h1>
<Parent data={data}/>
<Counter/>

    </>
  );

}

export default App
