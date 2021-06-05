
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>

          <MainComponent />


        </BrowserRouter>



      </Provider>


    </div>
  );
}

export default App;
