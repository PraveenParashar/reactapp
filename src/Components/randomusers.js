import React, { Component } from "react";

import axios from "axios";

class randomusers extends Component {
    constructor(props) {
      super(props);
   
      this.state ={ isLoading: true}
     
    }
    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
      render(){

        if(this.state.isLoading){
          return(
            <div>movies</div>  
          )
        }
    
        return(
         <div>movies</div>             
         
        );
      }

    }

export default randomusers;