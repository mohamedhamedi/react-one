import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './Navigate/Navigate';

import Slides from './slides/Slides';


function App() {
  return (
<div className="App">
      <Navigate/>
    <Slides/>
    </div>
  );
}

export default App;
