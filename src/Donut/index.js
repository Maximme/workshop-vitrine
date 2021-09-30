import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentageFile = 66;
const percentageUrl = 24;
const percentageMail = 18;



const Donut = () => (
  <div style={{display:"flex", alignItems: "center", justifyContent: "center" }}>
    <Example>
      <CircularProgressbar style={{stroke: "#654377"}}value={percentageFile} text={`${percentageFile}%`} />
      <p className="name">Blocked Files</p>
    </Example>   
    <Example>
      <CircularProgressbar value={percentageUrl} text={`${percentageUrl}%`} />
      <p className="name">Blocked Url</p>
    </Example> 
    <Example>
      <CircularProgressbar value={percentageMail} text={`${percentageMail}%`} />
      <p className="name">Blocked Email</p>
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