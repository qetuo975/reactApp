import { useState, useMemo, useCallback } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { CalendarRowsData } from "../../../Data/data";
import { Delete, CheckCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";

function SettingDataGrid() {
  const [MessengeDialogText, setMessengeDialogText] = useState("");
  const [CalendarRows, setCalendarRows] = useState(CalendarRowsData);
  const deleteCalendar = useCallback(
    (id) => () => {
      setCalendarRows((prevRows) => prevRows.filter((row) => row.id !== id));
    },
    []
  );
  const CalendarColumns = useMemo(
    () => [
      {
        field: "avatar",
        headerName: "Avatar",
        renderCell: (params) => (
          <Avatar alt={params.value} src={params.row.avatar} />
        ),
      },
      {
        field: "Olusturan",
        headerName: "Oluşturan",
        type: "string",
        width: 150,
      },
      {
        field: "Gorev",
        headerName: "Yapılacak İşlem",
        type: "string",
        width: 300,
      },
      { field: "Tarih", headerName: "Tarih" },
      { field: "Tamamlandı", headerName: "Tamamlanma Durumu", type: "boolean" },
      {
        field: "actions",
        type: "actions",
        headerName: "İşlemler",
        width: 150,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            onClick={deleteCalendar(params.id)}
          />,

          <GridActionsCellItem
            icon={<CheckCircle />}
            label="More"
            onClick={() => {
              setMessengeDialogText((params.row.Tamamlandı = true));
            }}
          />,
        ],
      },
    ],
    [deleteCalendar]
  );
  return (
    <DataGrid
      rows={CalendarRows}
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
      columns={CalendarColumns}
      pageSizeOptions={[5]}
      pagination={true}
      slots={{ toolbar: GridToolbar }}
    />
  );
}

export default SettingDataGrid;
