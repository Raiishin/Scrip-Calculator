export const calculateAvgScripCost = (scripCost, scripShares) => {
  return parseFloat((scripCost / scripShares).toFixed(2));
};
export const calculateYield = (expectedForwardDPS, avgScripShareCost) => {
  return parseFloat(((expectedForwardDPS / avgScripShareCost) * 100).toFixed(5));
};

export const calculateNewAvgCost = (avgCostPerShare, sharesOutstanding, scripCost, scripShares) => {
  const totalCost = avgCostPerShare * sharesOutstanding + scripCost;
  const totalShares = parseInt(sharesOutstanding) + scripShares;
  return (totalCost / totalShares).toFixed(3);
};

export const validate = (content) => {
  if (content !== " ") return true;
  else return false;
};

export const createData = (
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
