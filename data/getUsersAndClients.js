module.exports = () => {
  return {
    items: [
      {
        clientId: 2314,
        clientName: "Testing Template",
        clientCode: "TT1",
        users: [],
        groups: [],
      },
      {
        clientId: 178,
        clientName: "Parent Vilas Test Entity",
        clientCode: "T31",
        users: [
          {
            userId: 22,
            userName: "vbs",
            clientId: 0,
          },
          {
            userId: 1,
            userName: "myr",
            clientId: 0,
          },
        ],
        groups: [
          {
            groupId: 2,
            groupName: "ViselGroup",
            clientId: 0,
          },
          {
            groupId: 1,
            groupName: "TestGroup",
            clientId: 0,
          },
        ],
      },
      {
        clientId: 176,
        clientName: "Yolandi Test RnL",
        clientCode: "H1",
        users: [],
        groups: [],
      },
      {
        clientId: 163,
        clientName: "test",
        clientCode: "HEI9",
        users: [],
        groups: [],
      },
      {
        clientId: 133,
        clientName: "Maitland",
        clientCode: "DE8",
        users: [],
        groups: [],
      },
    ],
    totalCount: 5,
    totalPages: 1,
    pageSize: 10,
    currentPage: 1,
  };
};
