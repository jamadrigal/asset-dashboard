export const assets = [
    {
      id: '1',
      primaryAssetCategory: {
        name:'Cash', 
        wealthAssetType: [
          {
            name: "Cash", 
            balance: 5000.00,
            assets: [
              {
                asset: "Cash Test", 
                balance: 5000.00
              }
            ]
          }
        ],
        balanceCurrent: 100000.50
      }
    },
    {
      id: '2',
      primaryAssetCategory: {
        name:'Investment', 
        wealthAssetType: [
          {
            name: "Cryptocurrency", 
            balance: 47500.00,
            assets: [
              {
                asset: "Crypto Test", 
                balance: 47500.00
              }
            ]
          },
          {
            name: "Brokeage", 
            balance: 416256.00,
            assets: [
              {
                asset: "Investment Account", 
                balance: 416256.00
              }
            ]
          }
        ],
        balanceCurrent: 463786.50
      }
      
    },
    {
      id: '3',
      primaryAssetCategory: {
        name:'Other Property', 
        wealthAssetType: [
          {
            name: "Vehicle", 
            balance: 30000.00,
            assets: [
              {
                asset: "Vehicle Test", 
                balance: 30000.00
              }
            ]
          }
        ],
        balanceCurrent: 300000.50
      }
    },
    {
      id: '4',
      primaryAssetCategory: {
        name:'Real Estate', 
        wealthAssetType: [
          {
            name: "Real Estate", 
            balance: 1500000.00,
            assets: [
              {
                asset: "Real Estate Test", 
                balance: 1500000.00
              }
            ]
          }
        ],
        balanceCurrent: 1500000.50
      }
    },
    
  ];
  