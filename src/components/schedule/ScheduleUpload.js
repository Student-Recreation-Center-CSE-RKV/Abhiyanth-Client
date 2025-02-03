import React, { useState } from "react";
import * as XLSX from "xlsx";

export default function  ScheduleUpload() {
  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert to JSON
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      // Filter relevant columns (EventName, Date, Time)
      const filteredData = parsedData.map(row => ({
        EventName: row.EventName || "",
        Date: row.Date || "",
        Time: typeof row.Time === 'number' ? XLSX.SSF.format("h:mm:ss", row.Time) : row.Time || ""
      }));

      console.log("Excel Data:", filteredData);
      setJsonData(filteredData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="p-5" style={{marginTop:"6%",marginLeft:"30%"}}>
      <h2 className="text-xl font-bold  mb-3" style={{color:"Pink"}}>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="mb-4" />
      
      {jsonData && (
        <pre className="bg-gray-100 p-3 mt-4 rounded" style={{color:"white"}}>
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      )}
    </div>
  );
};

