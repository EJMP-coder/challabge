import BasicTable from './components/molecules/basictable/basictable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import endpoind from './api/endpoind';





function App() {

  return (
    <Router>
      <div className="App">          

      <BasicTable poind/> 
 
      </div>
    </Router>
  )
}

export default App
