
import React, { useEffect, useState } from "react";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
// import DataTable from 'react-data-table-component';
import BasicTable from "./table";
// import Select from "react-select";
// import { Autocomplete, TextField } from "@mui/material";

export default function MultiSelect() {
  const [data, setData] = useState();
  const [bName, setBname] = useState([]);
  const [slug, setslug] = useState();
  const [vbName, setVbname] = useState();
  const [remove , setRemove] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .post(
          `https://us-central1-arboreal-vision-339901.cloudfunctions.net/get_filter_values`
        )
        .then((response) => {
          setData(response.data.data);
          response.data.data.map((dataall) => {
            console.log(dataall.b_name);
          });
        })
        .catch((err) => console.log(err.message));
    }
    fetchData();
  }, [remove]);

  const  onSelect =async (e) => {
    // setData([])
    let arr = []
      await e.map((selectedData) => {
          data.filter((mainData) => {
              if(selectedData.b_name === mainData.b_name){
                 arr.push(mainData)
            }
          })
          console.log(selectedData.b_name);
          console.log(arr,'data');
        })
        setData(arr)
  }

  const onRemove= () => {
    setRemove(true)
  }



  return (
    <>
        <Multiselect
            options={data} // Options to display in the dropdown
            selectedValues={bName} // Preselected value to persist in dropdown
            onSelect={(event) => onSelect(event)} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="b_name" // Property name to display in the dropdown options
         />
        <Multiselect
            options={data} // Options to display in the dropdown
            selectedValues={vbName} // Preselected value to persist in dropdown
            onSelect={(event) => onSelect(event)} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="vb_name" // Property name to display in the dropdown options
         />
        <Multiselect
            options={data} // Options to display in the dropdown
            selectedValues={slug} // Preselected value to persist in dropdown
            onSelect={(event) => onSelect(event)} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="slug" // Property name to display in the dropdown options
         />

         <div>
         <BasicTable datatable={data}/>
         </div>
    </>
  );
}
