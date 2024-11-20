import React,{Component} from "react";
import './App.css'
import Navbar from "./component/Navbar";
import News from "./component/News";
import { Routes,Route } from "react-router-dom";

export class App extends Component {
    render(){
      return(
        <>
          <div>
              <div className="container">
                <Navbar/>
                <Routes>
                  <Route key="general" path="/" element={<News pageSize = {8} country={"us"} category="general"/>}/>
                  <Route key="business" path="/business" element={<News pageSize = {8} country={"us"} category="business"/>}/>
                  <Route key="entertainment" path="/entertainment" element={<News pageSize = {8} country={"us"} category="entertainment"/>}/>
                  <Route key="health" path="/health" element={<News pageSize = {8} country={"us"} category="health"/>}/>
                  <Route key="science" path="/science" element={<News pageSize = {8} country={"us"} category="science"/>}/>
                  <Route key="sports" path="/sports" element={<News pageSize = {8} country={"us"} category="sports"/>}/>
                  <Route key="technology" path="/technology" element={<News pageSize = {8} country={"us"} category="technology"/>}/>
                </Routes>
              </div>
          </div>
        </>
      )
    }
}


export default App;