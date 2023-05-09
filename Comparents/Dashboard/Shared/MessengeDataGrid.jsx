import { useState, useMemo, useCallback } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { MessengeRowsData } from "../../../Data/data";
import { Delete, More } from "@mui/icons-material";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";


function MessengeDataGrid() {
    const [MessengeRows, setMessengeRows] = useState(MessengeRowsData);
    const [MessengeDialog, setMessengeDialog] = useState(false);
    const [MessengeDialogText, setMessengeDialogText] = useState("");

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
                onClick={deleteMessenge(params.id)}
              />,
    
              <GridActionsCellItem
                icon={<More />}
                label="More"
                onClick={() => {
                  setMessengeDialogText(params.row.Mesaj);
                  setMessengeDialog(true);
                }}
              />,
            ],
          },
        ],
        [deleteMessenge]
      );
  return (
    <>
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

export default MessengeDataGrid;
