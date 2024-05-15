import { Avatar, Box } from "@mui/material";
import { AvatarAtomConfig } from "../models/avatar.config";

export default function AvatarAtom({
  radius,
  src,
  widht,
  height,
  alt,
  color,
  onClick,
}: AvatarAtomConfig) {
  return (
    <Avatar
      sx={{
        borderRadius: `${radius}`,
        width: `${widht}`,
        height: `${height}`,
        bgcolor: `${color}`,
        cursor: onClick ? "pointer" : "default",
      }}
      alt={alt}
      src={src}
      onClick={onClick as any}
    />
  );
}
