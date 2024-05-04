export interface TypographyAtomConfig {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  variant:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  text: string;
  color?: string;
  fontWeight?: string;
}
