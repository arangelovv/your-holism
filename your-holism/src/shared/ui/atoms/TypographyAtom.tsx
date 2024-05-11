import { Typography } from "@mui/material";
import { TypographyAtomConfig } from "../models/typography.config";

export default function TypographyAtom({
  align,
  variant,
  text,
  color,
  fontWeight,
  flexGrow,
}: TypographyAtomConfig) {
  return (
    <Typography
      variant={variant}
      align={align}
      component="div"
      sx={{
        flexGrow: `${flexGrow}`,
        color: `${color}`,
        fontWeight: `${fontWeight}`,
      }}
    >
      {text}
    </Typography>
  );
}
