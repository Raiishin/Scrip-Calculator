import React from "react";
const { Button } = require("@material-ui/core");
const { validate } = require("../helpers");

export function RenderTableButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        if (validate(document.getElementById("expectedForwardDPS").value) === false) {
          props.handleClickOpen();
          props.setErrorMessage("Please input the Expected Annual Dividend");
        } else if (validate(document.getElementById("sharesOutstanding").value) === false) {
          props.handleClickOpen();
          props.setErrorMessage("Please input the Current Amount of Shares");
        } else if (validate(document.getElementById("avgCostPerShare").value) === false) {
          props.handleClickOpen();
          props.setErrorMessage("Please input the Current Average Cost Per Share");
        } else if (validate(document.getElementById("scripPrice").value) === false) {
          props.handleClickOpen();
          props.setErrorMessage("Please input the Scrip Issue Price");
        } else if (validate(document.getElementById("DPS").value) === false) {
          props.handleClickOpen();
          props.setErrorMessage("Please input the Declared Dividend Per Share");
        } else {
          props.calculateNumberOfSharesForScrip(props.page, props.rowsPerPage);
          props.setPaginationView(true);
        }
      }}
    >
      Show Me My Scrips
    </Button>
  );
}
