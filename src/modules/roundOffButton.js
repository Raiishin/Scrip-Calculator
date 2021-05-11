import React from "react";
const { Grid, Button } = require("@material-ui/core");

export function RoundOffButton(props) {
  return (
    <Grid container style={{ padding: 5 }}>
      <Grid item style={{ padding: 5 }}>
        Round off to:
      </Grid>
      <Grid item style={{ padding: 5 }}>
        <Button
          variant={props.flag1 ? "contained" : "outlined"}
          color="primary"
          size="small"
          onClick={() => {
            props.handleButtonClick("flag1");
          }}
        >
          0.5
        </Button>
      </Grid>
      <Grid item style={{ padding: 5 }}>
        <Button
          variant={props.flag2 ? "contained" : "outlined"}
          color="primary"
          size="small"
          onClick={() => {
            props.handleButtonClick("flag2");
          }}
        >
          1
        </Button>
      </Grid>
    </Grid>
  );
}
