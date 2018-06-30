import React, { Component } from "react";
import axios from "axios";
const url = 'https://randomuser.me/api/?results=10';

class Data extends Component {
  constructor(props) {
    super(props);
    this.message = "praveen";
  
   this.state = {
    randomuser: []
   };
   
  }
  componentDidMount() {
    this.fetchrandomuser();
   }
  
   fetchrandomuser() {
    axios.get(url)
     .then((res) => {
       console.log(res.data.results);
      this.setState({randomuser: res.data.results});
     });
   }


   render() {
    var UPE = this.state.randomuser.map(function(item, index) {
     return (
     
      
        <div className="col s6 m4">
        
        <div className="box-container" key={item.id.name}>
          <h1>{item.name.first}</h1>
          <p>{item.name.last}</p>
          </div>
         
        </div>
    
       )
     }
    
    )
    
    return (
     <div className="row">
      { UPE }
     </div>
    );
   }
 }
 function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}
export default Data;