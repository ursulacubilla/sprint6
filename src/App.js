import './App.css';
import Application from './application';
import Welcome from './welcome';
import { useState } from 'react';


function App() {
  const [visible, setVisible] = useState(true);
 
  return (
    <div className="App">

    {visible && <Welcome onComenzar={() => setVisible(false)} />}

    {!visible && <Application />}
    
    </div>
  );
};

export default App;
