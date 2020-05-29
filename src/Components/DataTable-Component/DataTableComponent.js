import React from 'react';
import MaterialTable from 'material-table';
//import Checkbox from '@material-ui/core/Checkbox';
//import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//import SearchIcon from '@material-ui/icons/Search';
//import CheckIcon from '@material-ui/icons/Check';
//import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
//import '../DataTable-Component/DataTableComponent.css';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Project Name',          field: 'name' },
      { title: 'Project Manager',       field: 'Project_Manager' },
      { title: 'Week end Date',         field: 'weekenddate' },
      { title: 'Overall Project Status',field: 'status' },
      { title: 'Open Risks',         field: 'risk' }, 

    ],
    data: [
        { name: 'UNGERBOECK', Project_Manager: 'Manager1', weekenddate: '12/02/1991',  status: 'Red', risk: 2 },
        { name: 'SMAI', Project_Manager: 'Manager2', weekenddate: '02/06/1994',  status: 'Green', risk: 1 },
        { name: 'SERVERX', Project_Manager: 'Manager3', weekenddate: '18/09/2016',  status: 'Yellow', risk: 1 },
        { name: 'UNGERBOECK', Project_Manager: 'Manager3', weekenddate: '14/05/2018',  status: 'Red', risk: 2 },
        { name: 'SMAI', Project_Manager: 'Manager1', weekenddate: '26/07/2017',  status: 'Green', risk: 3 },
        { name: 'SERVERX', Project_Manager: 'Manager2', weekenddate: '22/10/1995',  status: 'Yellow', risk: 2 },
        { name: 'UNGERBOECK', Project_Manager: 'Manager1', weekenddate: '03/02/1994',  status: 'Red', risk: 1 },
        { name: 'SMAI', Project_Manager: 'Manager3', weekenddate: '04/05/2019',  status: 'Green', risk: 1 },
        { name: 'SERVERX', Project_Manager: 'Manager2', weekenddate: '14/08/2017',  status: 'Yellow', risk: 2 },
        { name: 'UNGERBOECK', Project_Manager: 'Manager2', weekenddate: '14/11/2011',  status: 'Red', risk: 2 }
    ],
  });


  //const [checked] = React.useState(false);
  const [ onSelectAllClick,  numSelected, rowCount] = React.useState(false);

//  const handleChange = (event) => {
//    setChecked(event.target.checked);
//  };

  return (
    <div>
        <div className="margin">
        <Button variant="contained" color="primary"  href="/wsr">
            Add New
        </Button>
        </div>
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      icons={DeleteOutlineIcon}
      editable={{
        
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),

          
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  </div>
  );
}


