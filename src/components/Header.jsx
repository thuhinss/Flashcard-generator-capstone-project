/*in this file we are making the header of our website header contains the image of Almabetter logo and by toggeling the dark mode button it will change its color between white and black*/
import React from "react";
import logo from "../assets/download.png";

// Here we are passing props to use functionality of dark mode/light mode
const Header = (props) => {

  return (
    <>
      <div className= {`shadow-lg  ${props.mode} flex`} >
        <img className=" pt-3 pb-2 ml-5 h-20 w-auto " src={logo} alt="logo" />
        <h1 className="text-slate-100 ml-0 m-3 text-5xl font-normal" style={{ color: props.mode === "white" ? "black" : "white" }}>maBetter</h1> {/*here we are changing modes by defining color using ternary operator*/}
      </div>

      <div className="flex justify-end mr-5  mt-5 ">
        <input
          className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary dark:checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
          type="checkbox"
          role="switch"
          id="flexSwitchChecked"
          onClick={props.toggleMode} // getting toggle button from app.js using props. and here we are using it to toggle color mode
        />
        <label
          className="inline-block pl-[0.15rem] font-semibold hover:cursor-pointer"
          htmlFor="flexSwitchChecked"
          style={{ color: props.mode === "white" ? "black" : "white" }}
        >
          Dark Mode
        </label>
      </div>
    </>
  );
};

export default Header;