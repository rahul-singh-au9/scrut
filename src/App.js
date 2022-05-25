import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

function App() {
  const [tableData, setTableData] = useState([
    {
      vendor: "Raj",
      email: "Raj@gmail.com",
      code: 45630,
      po: 456301234,
      status: "GRN Posted",
      city: "Chennai",
      value: 78456,
    },
    {
      vendor: "Mohan",
      email: "mohan@gmail.com",
      code: 45190,
      po: 456301231,
      status: "GRN Posted",
      city: "Delhi",
      value: 456125,
    },
    {
      vendor: "Sweety",
      email: "sweety@gmail.com",
      code: 41812,
      po: 456301232,
      status: "Accepted",
      city: "Noida",
      value: 458796,
    },
    {
      vendor: "Vikas",
      email: "vikas@gmail.com",
      code: 43210,
      po: 456301233,
      status: "Review Req",
      city: "Mumbai",
      value: 874569,
    },
    {
      vendor: "Neha",
      email: "neha@gmail.com",
      code: 41301,
      po: 456301235,
      status: "Accepted",
      city: "Patna",
      value: 408521,
    },
    {
      vendor: "Mohan",
      email: "mohan@gmail.com",
      code: 45590,
      po: 456301236,
      status: "Review Req",
      city: "Delhi",
      value: 456125,
    },
    {
      vendor: "Sweety",
      email: "sweety@gmail.com",
      code: 52912,
      po: 456301237,
      status: "Dispatched",
      city: "Noida",
      value: 458796,
    },
    {
      vendor: "Vikas",
      email: "vikas@gmail.com",
      code: 54321,
      po: 456301238,
      status: "Rejected",
      city: "Mumbai",
      value: 874569,
    },
    {
      vendor: "Raj",
      email: "Raj@gmail.com",
      code: 40123,
      po: 456301235,
      status: "Dispatched",
      city: "Chennai",
      value: 78456,
    },
    {
      vendor: "Mohan",
      email: "mohan@gmail.com",
      code: 45159,
      po: 456301239,
      status: "Open",
      city: "Delhi",
      value: 456125,
    },
    {
      vendor: "Sweety",
      email: "sweety@gmail.com",
      code: 41891,
      po: 456301240,
      status: "Open",
      city: "Noida",
      value: 458796,
    },
    {
      vendor: "Vikas",
      email: "vikas@gmail.com",
      code: 50321,
      po: 456301241,
      status: "Open",
      city: "Mumbai",
      value: 874569,
    },
  ]);
  const columns = [
    {
      title: "Vendor",
      field: "vendor",
      sorting: false,
      filtering: false,
    },
    { title: "Email", field: "email", filterPlaceholder: "filter" },
    { title: "Vendor Code", field: "code", align: "center", grouping: false },
    {
      title: "PO#",
      field: "po",
    },
    {
      title: "Status",
      field: "status",
      cellStyle: { color: "#009688" },
      render: (rowData) => (
        <div
          style={{
            color:
              rowData.status === "Accepted"
                ? "#008000aa"
                : rowData.status === "Open" ||
                  rowData.status === "Dispatched" ||
                  rowData.status === "GRN Posted"
                ? "blue"
                : rowData.status === "Review Req"
                ? "orange"
                : "#f90000aa",
          }}
        >
          {rowData.status}
        </div>
      ),
    },
    { title: "City", field: "city", filterPlaceholder: "filter" },
    {
      title: "PO Value",
      field: "value",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
    },
  ];
  return (
    <div className="App">
      {/* <h1 align="center">Riversys</h1> */}
      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          },
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
            color: "primary",
          }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
        }}
        title="Purchage Orders"
        icons={{ Add: () => <AddIcon /> }}
      />
    </div>
  );
}

export default App;
