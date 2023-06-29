module.exports = () => {
  return {
    eventId: 1,
    productId: 1,
    productName: "MI SELECT EQUITY",
    approvalStatus: "Created",
    notes: "",
    summary: {
      netFlowBalance: 1,
      availableLocalCash: 1000,
      availableForeignCash: [
        { id: 1, currencyName: "USD", spotRate: 19, foreignCash: 20 },
        { id: 2, currencyName: "EUR", spotRate: 21, foreignCash: 20 },
        { id: 3, currencyName: "YEN", spotRate: 2, foreignCash: 20 },
        // { id: 4, currencyName: "TRY", spotRate: 5, foreignCash: 9999 },
        // { id: 5, currencyName: "DKK", spotRate: 9, foreignCash: 9999 },
      ],
      totalBalance: 1820,
    },
    allocationBuildingBlocks: [
      {
        allocationBuildingBlock: {
          fundNumber: "ALLOCBB002",
          percentage: 50,
          name: "13413-RCL PENSION LAURUIM AFRICA USD BOND BB",
        },
        portfolioBuildingBlocks: [
          {
            masterPortfolioFlag: true,
            exclusionFlag: false,
            portfolioCode: 23,
            fundName: "MI SELECT UK",
            navMarketValue: 100,
            navUnit: 2,
            navPrice: 100,
            navTotal: 300,
            navPercentage: 20,
            fundCurrency: "ZAR",
            currencySpotRate: 1,
            fundPolicy: 0,
            allocationPercentage: 0,
            productCurrencyAllocation: 0,
            fundCurrencyAllocation: 0,
          },
          {
            masterPortfolioFlag: false,
            exclusionFlag: false,
            portfolioCode: 24,
            fundName: "MI SELECT UQ",
            navMarketValue: 100,
            navUnit: 2,
            navPrice: 100,
            navTotal: 300,
            navPercentage: 20,
            fundCurrency: "ZAR",
            currencySpotRate: 1,
            fundPolicy: 40,
            allocationPercentage: 40,
            productCurrencyAllocation: 0,
            fundCurrencyAllocation: 0,
          },
          {
            masterPortfolioFlag: false,
            exclusionFlag: false,
            portfolioCode: 25,
            fundName: "MI SELECT UQ",
            navMarketValue: 100,
            navUnit: 2,
            navPrice: 100,
            navTotal: 300,
            navPercentage: 20,
            fundCurrency: "ZAR",
            currencySpotRate: 1,
            fundPolicy: 60,
            allocationPercentage: 60,
            productCurrencyAllocation: 0,
            fundCurrencyAllocation: 0,
          },
        ],
      },

      {
        allocationBuildingBlock: {
          fundNumber: "ALLOCBB001",
          percentage: 50,
          name: "13413-RCL PENSION LAURUIM AFRICA USD BOND BB",
        },
        portfolioBuildingBlocks: [
          {
            masterPortfolioFlag: true,
            exclusionFlag: false,
            portfolioCode: 33,
            fundName: "MI SELECT UQ",
            navMarketValue: 100,
            navUnit: 2,
            navPrice: 100,
            navTotal: 300,
            navPercentage: 20,
            fundCurrency: "ZAR",
            currencySpotRate: 1,
            fundPolicy: 0,
            allocationPercentage: 0,
            productCurrencyAllocation: 0,
            fundCurrencyAllocation: 0,
          },
          {
            masterPortfolioFlag: false,
            exclusionFlag: false,
            portfolioCode: 34,
            fundName: "MI SELECT UQ",
            navMarketValue: 100,
            navUnit: 2,
            navPrice: 100,
            navTotal: 300,
            navPercentage: 20,
            fundCurrency: "USD",
            currencySpotRate: 19,
            fundPolicy: 30,
            allocationPercentage: 30,
            productCurrencyAllocation: 0,
            fundCurrencyAllocation: 0,
          },
          {
            masterPortfolioFlag: false,
            exclusionFlag: false,
            portfolioCode: 81,
            fundName: "MI SELECT UQ",
            navMarketValue: 100,
            navUnit: 2,
            navPrice: 100,
            navTotal: 300,
            navPercentage: 20,
            fundCurrency: "EUR",
            currencySpotRate: 21,
            fundPolicy: 50,
            allocationPercentage: 50,
            productCurrencyAllocation: 0,
            fundCurrencyAllocation: 0,
          },
          {
            masterPortfolioFlag: false,
            exclusionFlag: false,
            portfolioCode: 78,
            fundName: "MI SELECT UQ",
            navMarketValue: 100,
            navUnit: 2,
            navPrice: 100,
            navTotal: 300,
            navPercentage: 20,
            fundCurrency: "YEN",
            currencySpotRate: 2,
            fundPolicy: 20,
            allocationPercentage: 20,
            productCurrencyAllocation: 0,
            fundCurrencyAllocation: 0,
          },
        ],
      },
    ],
  };
};