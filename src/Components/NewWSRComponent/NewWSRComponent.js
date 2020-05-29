import React, { Component } from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import '../NewWSRComponent/NewWSRComponent.css';

class NewWSRComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        files: []
      };
    }
    handleChange(files){
      this.setState({
        files: files
      });
    }
    render(){
      return (
            <div className="border">
                
            </div>
      )
    }
  }

  export default NewWSRComponent