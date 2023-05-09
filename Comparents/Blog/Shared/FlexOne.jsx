import "../../../CSS/Blog/FlexOne.css";
import { useCallback, useMemo, useState } from "react";
import {
  Avatar,
} from "@mui/material";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { Delete, More } from "@mui/icons-material";
import { MessengeRowsData } from "../../../Data/data";

function FlexOne() {
    const [MessengeRows, setMessengeRows] = useState(MessengeRowsData);
    const deleteMessenge = useCallback(
      (id) => () => {
        setMessengeRows((prevRows) => prevRows.filter((row) => row.id !== id));
      },
      []
    );
  
    const MessengeColumns = useMemo(
      () => [
        {
          field: "avatar",
          headerName: "Avatar",
          width: 75,
          renderCell: (params) => (
            <Avatar alt={params.value} src={params.row.avatar} />
          ),
        },
        { field: "İsim", headerName: "İsim", type: "string", width: 150 },
        { field: "Soyisim", headerName: "Soyisim", type: "string" },
        { field: "Tip", headerName: "Tip", type: "string" },
        { field: "Mesaj", headerName: "Mesaj", type: "string", width: 400 },
        {
          field: "actions",
          type: "actions",
          headerName: "İşlemler",
          width: 80,
          getActions: (params) => [
            <GridActionsCellItem
              icon={<Delete />}
              label="Delete"
              onClick={() => {
                  console.log("asdsa")
              }}
            />,
  
            <GridActionsCellItem
              icon={<More />}
              label="More"
              onClick={() => {
                  console.log("asdsa")
              }}
            />,
          ],
        },
      ],
      [deleteMessenge]
    );

    return (     <>
      <DataGrid
        className="TabPanelDataGrid"
        rows={MessengeRows}
        getRowHeight={() => {
          return 50;
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        columns={MessengeColumns}
        pageSizeOptions={[5]}
        pagination={true}
        slots={{ toolbar: GridToolbar }}
      />
    </>);
}

export default FlexOne;