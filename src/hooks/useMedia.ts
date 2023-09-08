import { useMediaQuery } from "@mui/material";

export const useMedia = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 968px)");
  const isDesktop = useMediaQuery("(min-width: 1225px)");
  return { isMobile, isTablet, isDesktop };
};
