import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import NavBar from './layouts/NavBar';


function App() {
  return (
    <div className="App">
     <NavBar/>
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
