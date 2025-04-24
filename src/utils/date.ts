export const formatDate = (dateS: string | undefined): string => {
  if (!dateS) return "";
  const d = new Date(dateS);
  const formattedDate = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};
