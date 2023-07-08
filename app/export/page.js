'use client'
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
try{

  const fileReader = new FileReader();
}catch(err){
  console.log("error")
}

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const newArray = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(newArray);
    axios.post('/api/upload', newArray)
      .then((res) => {
        console.log(res);
        // console.log(res.data);
      }
      )
      .catch((err) => {
        console.log(err);
      })
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div className="text-blue-500 text-center grid place-content-center">
      <form>
        <input
          type="file"
          id="csvFileInput"
          accept=".csv"
          onChange={handleOnChange}
          className="border border-blue-500 rounded-md py-2 px-4 mb-4"
        />

        <button
          onClick={(e) => handleOnSubmit(e)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          IMPORT CSV
        </button>
      </form>

      <br />

      <div className="overflow-x-auto">
    <table className="border border-blue-500">
      <thead>
        <tr className="bg-blue-500 text-white" key="header">
          {headerKeys.map((key) => (
            <th key={key} className="py-2 px-4">{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {array.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((val, index) => (
              <td key={index} className="border border-blue-500 py-2 px-4">{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </div>

  );
}

export default App;
