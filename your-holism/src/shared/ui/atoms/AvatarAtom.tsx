import { Avatar } from "@mui/material";
import { AvatarAtomConfig } from "../models/avatar.config";

export default function AvatarAtom({
  radius,
  src,
  widht,
  height,
  alt,
  color,
}: AvatarAtomConfig) {
  return (
    <Avatar
      sx={{
        borderRadius: `${radius}`,
        width: `${widht}`,
        height: `${height}`,
        bgcolor: `${color}`,
      }}
      alt={alt}
      src={src}
    />
  );
}
