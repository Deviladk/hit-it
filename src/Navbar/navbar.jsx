import { useState } from "react";
import "./navbar.css";
import { useEffect } from "react";
// import Daynight from"./Daynight"


function Navbar(){
    const [theme,setTheme]=useState("day");
    const toggleTheme =()=>{
        if(theme==="day"){
            setTheme("night")
        }else{
            setTheme("day")
        }
  
    };
    useEffect(()=>{
        document.body.className=theme;
    },[theme]);
       
    return <>
    
        <div className="submain">
            <div className="icon">ICON</div>
            <div className="navi">
                   <div className="daymode"  >
                          <div className="nightmode"  onClick={toggleTheme}>
                                     <span id="nigspan"> Night</span>
                          </div>
                   </div>
                   <div className="home common">
                           Home
                   </div>
                   <div className="logout common">
                           Log-out
                   </div>
                   <div className="profile common">
                      Profile
                   </div>

            </div>
        </div>
   
    </>

}
export default Navbar;