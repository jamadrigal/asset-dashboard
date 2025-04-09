import { gql } from '@apollo/client';

export const GET_ASSETS = gql`
  query GetAssets($wid: String!) {
    getAssets(wid: $wid) {
      assetDescription
      assetId
      assetInfo
      assetInfoType
      assetMask
      assetName
      assetOwnerName
      balanceAsOf
      balanceCostBasis
      balanceCostFrom
      balanceCurrent
      balanceFrom
      balancePrice
      balancePriceFrom
      balanceQuantityCurrent
      beneficiaryComposition
      cognitoId
      creationDate
      currencyCode
      deactivateBy
      descriptionEstatePlan
      hasInvestment
      holdings {
        majorAssetClasses {
          majorClass
          assetClasses {
            minorAssetClass
            value
          }
        }
      }
      includeInNetWorth
      institutionId
      institutionName
      integration
      integrationAccountId
      isActive
      isAsset
      isFavorite
      isLinkedVendor
      lastUpdate
      lastUpdateAttempt
      logoName
      modificationDate
      nextUpdate
      nickname
      note
      noteDate
      ownership
      primaryAssetCategory
      status
      statusCode
      userInstitutionId
      vendorAccountType
      vendorContainer
      vendorResponse
      vendorResponseType
      wealthAssetType
      wid
    }
  }
`;

