export const getXsGrid = (screenWidth: number): number => {
  if (screenWidth < 500) return 12
  else if (screenWidth < 900) return 6
  else return 4
}
