import React from "react";
const { TablePagination } = require("@material-ui/core");

export function Pagination(props) {
  return (
    <TablePagination
      rowsPerPageOptions={[50, 250, 500, 1000]}
      count={100000}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      onChangePage={props.handleChangePage}
      onChangeRowsPerPage={props.handleChangeRowsPerPage}
    />
  );
}
