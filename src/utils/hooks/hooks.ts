export const getWindowDimensions = () => {
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window
  return {
    screenWidth,
    screenHeight,
  }
}
