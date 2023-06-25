import React, { memo } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { EnglishTranslationGrid } from "pages/English/dictionary/interfaces";
import {
  addTranslations,
  deleteOneTranslation,
} from "api/dictionary/dictionary";

interface TranslateListProps {
  rows: EnglishTranslationGrid[];
}

const TranslateList: React.FC<TranslateListProps> = ({ rows }) => {
  const handleDelete = async (engWord: string | number) => {
    await deleteOneTranslation(String(engWord));
  };

  const columns: GridColDef[] = [
    { field: "engWord", headerName: "Англійське слово", width: 150 },
    {
      field: "translate",
      headerName: "Переклад",
      width: 500,
      editable: true,
    },
    {
      field: "action",
      headerName: "",
      renderCell: ({ id }) => {
        return (
          <IconButton onClick={() => handleDelete(id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const handleCellEdited = async (newRow: EnglishTranslationGrid) => {
    const { engWord, translate } = newRow;
    const translateArr = translate
      .split(",")
      .map((t) => t.trim().toLowerCase());
    await addTranslations({ englishWord: engWord, translations: translateArr });
    return newRow;
  };

  return (
    <Box sx={{ height: 500, width: "100%", mt: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        processRowUpdate={handleCellEdited}
        sortModel={[
          { field: "engWord", sort: "asc" },
          { field: "translate", sort: "asc" },
        ]}
      />
    </Box>
  );
};

export default memo(TranslateList);
