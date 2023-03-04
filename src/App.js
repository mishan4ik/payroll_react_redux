import './App.css';
import Salary from "./Component/SalaryApp"
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer/reducer.js'; 


let store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Salary/>
      </Provider>
    </div>
  );
}

export default App;
