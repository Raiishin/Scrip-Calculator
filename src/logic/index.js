/**
 * User Inputs
 *
 * Expected Forward DPS
 * Shares Currently Held = sharesOutstanding
 * Scrip Issue Price = scripPrice
 * Dividend Per Share = DPS
 *
 * Generated Values
 *
 * Average Cost Per Scrip Share = avgScripShareCost
 * Cost for Scrip = scripCost
 * Received Scrip Shares = scripShares
 * Number of Shares for Scrip = sharesForScrip
 * Net Cash Dividends = netCash
 * Yield on Scrip Cost = scripCostYield
 */

let expectedForwardDPS, sharesOutstanding, scripPrice, DPS;
const arr = new Array();

const calculateAvgScripCost = (scripCost, scripShares) => {
  return scripCost / scripShares;
};
const calculateYield = (expectedForwardDPS, avgScripShareCost) => {
  return expectedForwardDPS / avgScripShareCost;
};

const calculateNumberOfSharesForScrip = (sharesOutstanding, scripPrice, DPS) => {
  // Loop starts from 0.5 and increments of 0.5
  for (let i = 0.5; i <= 30; i = i + 0.5) {
    var scripShares = Math.round(i); // Number is rounded up
    var sharesForScrip = (i * scripPrice) / DPS;
    var scripCost = sharesForScrip * DPS;
    var netCash = (sharesOutstanding - sharesForScrip) * DPS;

    var avgScripShareCost = calculateAvgScripCost(scripCost, scripShares);
    var scripCostYield = calculateYield(expectedForwardDPS, avgScripShareCost);

    arr.push({
      scripShares: scripShares,
      sharesForScrip: sharesForScrip,
      scripCost: scripCost,
      netCash: netCash,
      avgScripShareCost: avgScripShareCost,
      scripCostYield: scripCostYield,
    });
  }
};
