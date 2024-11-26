import React,{Component} from "react";
import './App.css'
import Navbar from "./component/Navbar";
import News from "./component/News";
import { Routes,Route } from "react-router-dom";

export class App extends Component { 

    constructor(){
      super();
      this.state={
        searchInput : null,
        darkMode :false
      }
      this.searchHandler = this.searchHandler.bind(this); 
      this.modeToggle = this.modeToggle.bind(this); 
    }
    searchHandler(e){
      console.log(e.target.value);
      this.setState({searchInput:e.target.value});
    }

    modeToggle(){
      console.log("mode change");
      this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
      console.log(this.state.darkMode);
      if(!this.state.darkMode){
        document.body.style.backgroundColor = "black";
      }else{
        document.body.style.backgroundColor = "white";
      }
    } 

    render(){
      return(
        <>
          <div>
              <Navbar searchHandler={this.searchHandler} modeToggle={this.modeToggle} darkMode={this.state.darkMode}/>
              <div className="container">
                <Routes>
                  <Route key="general" path="/" element={<News pageSize = {8} country={"us"} category="general" searchInput={this.state.searchInput} darkMode={this.state.darkMode}/>}/>
                  <Route key="business" path="/business" element={<News pageSize = {8} country={"us"} category="business" searchInput={this.state.searchInput} darkMode={this.state.darkMode}/>}/>
                  <Route key="entertainment" path="/entertainment" element={<News pageSize = {8} country={"us"} category="entertainment" searchInput={this.state.searchInput} darkMode={this.state.darkMode}/>}/>
                  <Route key="health" path="/health" element={<News pageSize = {8} country={"us"} category="health" searchInput={this.state.searchInput} darkMode={this.state.darkMode}/>}/>
                  <Route key="science" path="/science" element={<News pageSize = {8} country={"us"} category="science" searchInput={this.state.searchInput} darkMode={this.state.darkMode}/>}/>
                  <Route key="sports" path="/sports" element={<News pageSize = {8} country={"us"} category="sports" searchInput={this.state.searchInput} darkMode={this.state.darkMode}/>}/>
                  <Route key="technology" path="/technology" element={<News pageSize = {8} country={"us"} category="technology" searchInput={this.state.searchInput} darkMode={this.state.darkMode}/>}/>
                </Routes>
              </div>
          </div>
        </>
      )
    }
}


export default App;