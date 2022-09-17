import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface TitleProps extends TypographyProps {}

export const Title: React.FC<TitleProps> = ({ variant = "h2", ...props }) => {
  return <Typography {...props} variant={variant} textAlign={"center"} />;
};
