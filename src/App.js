import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout-component/LayoutComponent';
import DataTable from './Components/DataTable-Component/DataTableComponent';
import WSR from './Components/NewWSRComponent/NewWSRComponent';

function App() 
{
    return (
      <div className="App">
        <Router>
            <Layout>
            </Layout>
            <DataTable></DataTable>
            
            <Switch>
              <Route path="/WSR">
              <WSR/>
              </Route>
            </Switch>

        </Router>
      </div>
      );
}

export default App;
