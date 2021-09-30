import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentageFile = 66;
const percentageUrl = 24;
const percentageMail = 18;



const Donut = () => (
  <div style={{ padding: "40px 40px 40px 40px", display:"flex", alignItems: "center", justifyContent: "center" }}>
    <Example>
      <CircularProgressbar value={percentageFile} text={`${percentageFile}%`} />
    </Example>   
    <Example>
      <CircularProgressbar value={percentageUrl} text={`${percentageUrl}%`} />
    </Example> 
    <Example>
      <CircularProgressbar value={percentageMail} text={`${percentageMail}%`} />
    </Example>  
  </div>
);

function Example(props) {
  return (
    <div style={{ }}>
      <div style={{display: "flex", justifyContent:"center", alignItems:"center"  }}>
        <div style={{ margin: "50px"}}>{props.children}</div>
      </div>
    </div>
  );
}

export default Donut;


render(<Donut />, document.getElementById("root"));
