import { useState, useMemo, useCallback } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { VeliRowsData } from "../../../Data/data";
import { Delete } from "@mui/icons-material";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

function VeliDataGrid() {
  const [VeliRows, setVeliRows] = useState(VeliRowsData);
    const [MessengeDialog, setMessengeDialog] = useState(false);
  const [MessengeDialogText, setMessengeDialogText] = useState("");
  const deleteUser = useCallback(
    (id) => () => {
      setVeliRows((prevRows) => prevRows.filter((row) => row.id !== id));
    },
    []
  );
  const VeliColumn = useMemo(
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
      { field: "Telefon", headerName: "Telefon", type: "string" },
      { field: "Yas", headerName: "Yaş", type: "number" },
      { field: "Öğrenci_İsim", headerName: "Öğrenci İsim", type: "string" },
      { field: "Öğrenci_No", headerName: "Öğrenci No", type: "string" },
      { field: "Öğrenci_Sınıf", headerName: "Öğrenci Sınıf", type: "string" },
      {
        field: "actions",
        type: "actions",
        headerName: "İşlemler",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser]
  );
  return (
    <>
      <DataGrid
        className="TabPanelDataGrid"
        rows={VeliRows}
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
        columns={VeliColumn}
        pageSizeOptions={[5]}
        pagination={true}
        slots={{ toolbar: GridToolbar }}
      />
      <Dialog
        open={MessengeDialog}
        onClose={() => setMessengeDialog(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle display={"flex"} justifyContent={"center"}>
          Gelen Mesaj
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {MessengeDialogText}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default VeliDataGrid;
