
import './App.css';
import MainComponent from './MainComponent/MainComponent';
import { Provider } from "react-redux";
import { store } from "./Redux/Store";




function App() {
  return (
    <div>
      <Provider store={store}>

        <MainComponent />

      </Provider>


    </div>
  );
}

export default App;
