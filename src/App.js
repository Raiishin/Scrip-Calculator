import "./App.css";
import React, { useState } from "react";
const {
  TextField,
  Grid,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  CircularProgress,
} = require("@material-ui/core");
const { calculateAvgScripCost, calculateYield, calculateNewAvgCost, validate, createData } = require("./helpers");
const { Pagination } = require("./modules/pagination");
const { RoundOffButton } = require("./modules/roundOffButton");
const { ErrorDialog } = require("./modules/errorDialog");
const { RenderTableButton } = require("./modules/renderTableButton");

function App() {
  // User Inputs
  const [expectedForwardDPS, setExpectedForwardDPS] = useState(0);
  const [sharesOutstanding, setSharesOutstanding] = useState(0);
  const [avgCostPerShare, setAvgCostPerShare] = useState(0);
  const [scripPrice, setScripPrice] = useState(0);
  const [DPS, setDPS] = useState(0);

  // Error Prompts
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  // Round Off
  const [roundOff, setRoundOff] = useState(0.5);
  const [roundOffView, setRoundOffView] = useState(true);
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);

  // Data Rendering
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [paginationView, setPaginationView] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (flag) => {
    if (flag === "flag1") {
      setRoundOff(0.5);

      setFlag1(true);
      setFlag2(false);
    } else {
      setRoundOff(1);

      setFlag1(false);
      setFlag2(true);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    calculateNumberOfSharesForScrip(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    calculateNumberOfSharesForScrip(0, parseInt(event.target.value));
  };

  const calculateNumberOfSharesForScrip = (page, rowsPerPage) => {
    setLoading(false);

    const arr = [];
    const count = (page * rowsPerPage) / 2;
    let limit = ((page + 1) * rowsPerPage) / 2;

    for (let i = count + roundOff; i <= limit; i = i + roundOff) {
      let scripShares = Math.round(i); // Number is rounded up
      let sharesForScrip = Math.round((i * scripPrice) / DPS);
      let scripCost = parseFloat((sharesForScrip * DPS).toFixed(2));
      let netCash = parseFloat(((sharesOutstanding - sharesForScrip) * DPS).toFixed(2));

      let avgScripShareCost = calculateAvgScripCost(scripCost, scripShares);
      let scripCostYield = calculateYield(expectedForwardDPS, avgScripShareCost);

      // Calculate New Values
      let newAvgCostPerShare = calculateNewAvgCost(avgCostPerShare, sharesOutstanding, scripCost, scripShares);
      let newForwardYield = calculateYield(expectedForwardDPS, newAvgCostPerShare);
      arr.push(
        createData(
          i,
          scripShares,
          sharesForScrip,
          scripCost,
          avgScripShareCost,
          netCash,
          scripCostYield,
          newAvgCostPerShare,
          newForwardYield
        )
      );
    }

    setRows(arr);
    setLoading(true);

    if (roundOff === 0.5) {
      setRoundOffView(true);
    } else {
      setRoundOffView(false);
    }
  };

  return (
    <div className="App">
      <h1>Scrip Calculator</h1>

      <div style={{ padding: 20 }}>
        <Grid container spacing={1}>
          <Grid container style={{ padding: 5 }}>
            <Grid container item xl={2} xs={4}>
              <TextField
                label="Expected Annual Dividend"
                defaultValue=" "
                id="expectedForwardDPS"
                variant="outlined"
                onChange={(e) => {
                  setExpectedForwardDPS(e.target.value);
                }}
              />
            </Grid>
            <Grid container item xl={2} xs={4}>
              <TextField
                label="Current Amount of Shares"
                defaultValue=" "
                id="sharesOutstanding"
                variant="outlined"
                onChange={(e) => {
                  setSharesOutstanding(e.target.value);
                }}
              />
            </Grid>
            <Grid container item xl={2} xs={4}>
              <TextField
                label="Current Average Cost Per Share"
                defaultValue=" "
                id="avgCostPerShare"
                variant="outlined"
                onChange={(e) => {
                  setAvgCostPerShare(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container style={{ padding: 5 }}>
            <Grid container item xl={2} xs={4}>
              <TextField
                label="Scrip Issue Price"
                defaultValue=" "
                id="scripPrice"
                variant="outlined"
                onChange={(e) => {
                  setScripPrice(e.target.value);
                }}
              />
            </Grid>
            <Grid container item xl={2} xs={4}>
              <TextField
                label="Declared Dividend Per Share"
                defaultValue=" "
                id="DPS"
                variant="outlined"
                onChange={(e) => {
                  setDPS(e.target.value);
                }}
              />
            </Grid>
          </Grid>

          <RoundOffButton handleButtonClick={handleButtonClick} flag1={flag1} flag2={flag2} />

          <Grid container style={{ padding: 5 }}>
            <RenderTableButton
              handleClickOpen={handleClickOpen}
              setErrorMessage={setErrorMessage}
              calculateNumberOfSharesForScrip={calculateNumberOfSharesForScrip}
              setPaginationView={setPaginationView}
              page={page}
              rowsPerPage={rowsPerPage}
            />
            <ErrorDialog open={open} handleClose={handleClose} errorMessage={errorMessage}></ErrorDialog>
          </Grid>

          <Grid container style={{ padding: 5 }}>
            <Grid container>
              {loading ? (
                <Table stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Scrip Shares Entitlted</TableCell>
                      <TableCell align="center">Share Quantity to Elect</TableCell>
                      {roundOffView ? <TableCell align="center">Scrip Shares After Round Up/Down</TableCell> : ""}
                      <TableCell align="center">Average Cost per Scrip</TableCell>
                      <TableCell align="center">Yield on Scrip Share</TableCell>
                      <TableCell align="center">New Average Cost Yield per Share</TableCell>
                      <TableCell align="center">Cash to be Received</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.scripShares}>
                        <TableCell align="center">{row.scripShares}</TableCell>
                        <TableCell align="center">{row.sharesForScrip}</TableCell>
                        {roundOffView ? <TableCell align="center">{row.roundUp}</TableCell> : ""}
                        <TableCell align="center">{row.avgScripShareCost}</TableCell>
                        <TableCell align="center" style={{ fontWeight: "bold" }}>
                          {row.scripCostYield}
                        </TableCell>
                        <TableCell align="center" style={{ fontWeight: "bold" }}>
                          {row.newForwardYield}
                        </TableCell>
                        <TableCell align="center">{row.netCash}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      {paginationView ? (
                        <Pagination
                          rowsPerPage={rowsPerPage}
                          page={page}
                          handleChangePage={handleChangePage}
                          handleChangeRowsPerPage={handleChangeRowsPerPage}
                        ></Pagination>
                      ) : (
                        <TableRow />
                      )}
                    </TableRow>
                  </TableFooter>
                </Table>
              ) : (
                <CircularProgress />
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
