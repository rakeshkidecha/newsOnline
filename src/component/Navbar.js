import React,{Component} from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends Component{
    

    inputVlaueClear=()=>{
        const searchInput = document.querySelector('#search');
        if(searchInput && searchInput.value !==''){
            searchInput.value='';
        }
    }


    render(){
        return(
            <>  
            <nav className={`navbar navbar-expand-lg ${this.props.darkMode?"bg-dark text-white" : "bg-body-tertiary text-dark"} px-4`}>
                <div className="container-fluid">
                    <a className={`navbar-brand ${this.props.darkMode?"text-white" : "text-dark"}`} href="/">NewsOnline</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className={`nav-link ${this.props.darkMode?"text-white" : "text-dark"}`} aria-current="page" to="/" onClick={() => this.inputValueClear()}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${this.props.darkMode?"text-white" : "text-dark"}`} aria-current="page" onClick={() => this.inputValueClear()} to="/business">business</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${this.props.darkMode?"text-white" : "text-dark"}`} aria-current="page" onClick={() => this.inputValueClear()} to="/entertainment">entertainment</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${this.props.darkMode?"text-white" : "text-dark"}`} aria-current="page" onClick={() => this.inputValueClear()} to="/health">health</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${this.props.darkMode?"text-white" : "text-dark"}`} aria-current="page" onClick={() => this.inputValueClear()} to="/science">science</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${this.props.darkMode?"text-white" : "text-dark"}`} aria-current="page" onClick={() => this.inputValueClear()} to="/sports">sports</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${this.props.darkMode?"text-white" : "text-dark"}`} aria-current="page" onClick={() => this.inputValueClear()} to="/technology">technology</Link>
                        </li>
                    </ul>
                    </div>
                    <div style={{width:"200px"}} className='me-2'>
                        <input className={`me-2 ${this.props.darkMode?"bg-dark-subtle" : "bg-white"} form-control rounded-3 border-2 border-secondary px-2 outline-none`} style={{fontSize:"14px",padding:"4px 20px"}} type="search" id='search' onInput={this.props.searchHandler} placeholder="Search"/>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={this.props.modeToggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>
                </div>
            </nav>
        </>
        )
        
    }
}

export default Navbar;