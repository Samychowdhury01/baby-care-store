export const generateTitle = (title: string) => {
  const categoryTitle = title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return categoryTitle;
};
