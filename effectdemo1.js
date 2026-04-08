import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  //Define State
  const [name, setName] = useState({ FirstName: "viren", surname: "aggarwal" });
  const [title] = useState("BIO");

 //Call the use effect hook
  useEffect(() => {
    const timer = setTimeout(() =>{
      setName({ FirstName: "Shedrack", surname: "Akintayo" });
    },3000);
   return () => {clearTimeout(timer)}
  }, []); //pass in an empty array as a second argument
  
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {name.FirstName}</h3>
      <h3>Surname: {name.surname}</h3>
    </div>
  );
}

export default App;
