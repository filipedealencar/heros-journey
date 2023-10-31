import { extendTheme } from "@chakra-ui/react";
import { badgeStyles } from "./chakraBadge";
import { buttonStyles } from "./chakraButton";
import { globalStyles } from "./chakraStyles";

export default extendTheme(
  globalStyles, // Global styles
  buttonStyles, // Button styles
  badgeStyles // Badge styles
);
