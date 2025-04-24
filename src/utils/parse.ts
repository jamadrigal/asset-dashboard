interface AssetDetails {
  [key: string]: string | number | boolean | null | undefined;
}

export const parseAssetInfo = (info: string): AssetDetails | null => {
  try {
    return JSON.parse(info);
  } catch (error) {
    console.error("Error parsing JSON", error);
    return null;
  }
};
