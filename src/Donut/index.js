import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentageFile = 59;
const percentageUrl = 5;
const percentageMail = 47;

const Donut = () => (
  <div style={{display:"flex", alignItems: "center", justifyContent: "center" }}>
    <Example>
      <CircularProgressbar style={{stroke: "#654377"}}value={percentageFile} text={`${percentageFile}%`} />
      <p className="name">Fichiers bloqués</p>
    </Example>   
    <Example>
      <CircularProgressbar value={percentageUrl} text={`${percentageUrl}%`} />
      <p className="name">URL bloquées</p>
    </Example> 
    <Example>
      <CircularProgressbar value={percentageMail} text={`${percentageMail}%`} />
      <p className="name">Adresses mail bloquées</p>
    </Example>  
  </div>
);

function Example(props) {
  return (
    <div style={{ marginBottom: "200px"}}>
      <div style={{display: "flex", justifyContent:"center", alignItems:"center"  }}>
        <div style={{ margin: "50px"}}>{props.children}</div>
      </div>
    </div>
  );
}

export default Donut;


render(<Donut />, document.getElementById("root"));