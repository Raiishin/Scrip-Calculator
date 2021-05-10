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
  TablePagination,
  CircularProgress,
} = require("@material-ui/core");
const { calculateAvgScripCost, calculateYield, calculateNewAvgCost } = require("./logic/helpers");

function App() {
  const [expectedForwardDPS, setExpectedForwardDPS] = useState(0);
  const [sharesOutstanding, setSharesOutstanding] = useState(0);
  const [avgCostPerShare, setAvgCostPerShare] = useState(0);
  // const [currentForwardYield, setCurrentForwardYield] = useState(0);
  const [scripPrice, setScripPrice] = useState(0);
  const [DPS, setDPS] = useState(0);
  const [roundOff, setRoundOff] = useState(0.5);
  const [roundOffView, setRoundOffView] = useState(true);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [paginationView, setPaginationView] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);

  const handleButtonClick = (flag) => {
    if (flag === "flag1") {
      setFlag1(true);
      setFlag2(false);
    } else {
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

  const createData = (
    scripShares,
    roundUp,
    sharesForScrip,
    scripCost,
    avgScripShareCost,
    netCash,
    scripCostYield,
    newAvgCostPerShare,
    newForwardYield
  ) => {
    return {
      scripShares,
      roundUp,
      sharesForScrip,
      scripCost,
      avgScripShareCost,
      netCash,
      scripCostYield,
      newAvgCostPerShare,
      newForwardYield,
    };
  };

  const calculateNumberOfSharesForScrip = (page, rowsPerPage) => {
    setLoading(false);

    const arr = [];
    const count = (page * rowsPerPage) / 2;
    let limit = ((page + 1) * rowsPerPage) / 2;

    for (let i = count + roundOff; i <= limit; i = i + roundOff) {
      console.log("Start");
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
            {/* <Grid container item xl={2} xs={3} style={{ alignContent: "center" }}>
              Current Cost Yield = {currentForwardYield}
            </Grid> */}
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
          <Grid container style={{ padding: 5 }}>
            <Grid item style={{ padding: 5 }}>
              Round off to:
            </Grid>
            <Grid item style={{ padding: 5 }}>
              <Button
                variant={flag1 ? "contained" : "outlined"}
                color="primary"
                size="small"
                onClick={() => {
                  handleButtonClick("flag1");
                  setRoundOff(0.5);
                }}
              >
                0.5
              </Button>
            </Grid>
            <Grid item style={{ padding: 5 }}>
              <Button
                variant={flag2 ? "contained" : "outlined"}
                color="primary"
                size="small"
                onClick={() => {
                  handleButtonClick("flag2");
                  setRoundOff(1);
                }}
              >
                1
              </Button>
            </Grid>
          </Grid>

          <Grid container style={{ padding: 5 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(expectedForwardDPS, sharesOutstanding, scripPrice, DPS);
                // setCurrentForwardYield(calculateYield(expectedForwardDPS, avgCostPerShare));
                calculateNumberOfSharesForScrip(page, rowsPerPage);
                setPaginationView(true);

                console.log(rows);
              }}
            >
              Show Me My Scrips
            </Button>
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
                        <TableCell align="center">{row.scripCostYield}</TableCell>
                        <TableCell align="center">{row.newForwardYield}</TableCell>
                        <TableCell align="center">{row.netCash}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      {paginationView ? (
                        <TablePagination
                          rowsPerPageOptions={[50, 250, 500, 1000]}
                          count={100000}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: { "aria-label": "rows per page" },
                            native: true,
                          }}
                          onChangePage={handleChangePage}
                          onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
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
