// import logo from './logo.svg';
import './App.css';
import Views from "./components/views"
import { MDBContainer, MDBRow } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'

import {Provider} from "react-redux"
import {store} from "./redux/store"


function App() {
  return (
    <MDBContainer>
            <MDBRow>
            <Provider store = {store}>
              <Views />
            </Provider>
            </MDBRow>
        </MDBContainer>
    
  );
}

export default App;
