// utils/runSimulation.js
export function runSimulation(products) {
  let totalProfit = 0;
  let inventoryCost = 0;
  let soldUnits = 0;

  const chartData = [];

  products.forEach((product) => {
    const demand = product.expectedDemand;
    const stock = demand; // Simple: producimos la demanda esperada

    const sold = Math.min(stock, demand);
    const revenue = sold * product.price;
    const cost = stock * product.cost;

    totalProfit += revenue - cost;
    inventoryCost += cost;
    soldUnits += sold;

    // Guardamos datos para gráfico simple
    chartData.push(sold);
  });

  return {
    profit: totalProfit,
    soldUnits,
    inventoryCost,
    chartData,
  };
}
