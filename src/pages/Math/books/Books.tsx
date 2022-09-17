import React from "react";

import Grid from "@mui/material/Grid";
import SchoolCard from "components/schoolCard/SchoolCard";
import { schoolBooks2Form, schoolBooks4Form } from "../../Schoolbooks/books";

const MathBooks: React.FC = (): React.ReactElement => {
  const mathBook2Form = schoolBooks2Form.find(
    (book) => book.name === "Математика"
  );
  const mathBook4Form = schoolBooks4Form.find(
    (book) => book.name === "Математика"
  );
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      style={{ paddingBottom: "60px" }}
    >
      {mathBook2Form && (
        <Grid item xs={6}>
          <SchoolCard book={mathBook2Form} form={2} />
        </Grid>
      )}
      {mathBook4Form && (
        <Grid item xs={6}>
          <SchoolCard book={mathBook4Form} form={4} />
        </Grid>
      )}
    </Grid>
  );
};

export default MathBooks
