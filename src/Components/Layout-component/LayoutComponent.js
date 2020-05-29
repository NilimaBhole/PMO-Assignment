import React, { Component } from 'react';
import '../Layout-component/LayoutComponent.css';
import { TextField } from '@material-ui/core';

class LayoutComponent extends Component
{
    render(){
        return(
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <div className="search-container">
                    </div>
                </div>
                <div>
                    <br/><br/>
                Customer:<textarea rows="1" cols="20"></textarea>
                Project Name:<textarea rows="1" cols="20"></textarea>
                Project Manager:<textarea rows="1" cols="20"></textarea>
                Delivery Manager:<textarea rows="1" cols="20"></textarea><br/><br/>
                Project Status:<textarea rows="1" cols="20"></textarea>
                Start Date:<textarea rows="1" cols="20"></textarea>
                End Date:<textarea rows="1" cols="20"></textarea>
                </div>
                
                <h3>WSR/Project Tab</h3>

                

            </div>
        )
    }
}

export default LayoutComponent;