/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "";

export const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
