import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "#1F2128",
        bg: props.colorMode === "dark" ? "#1F2128" : "white",
        fontFamily: "Skranji",
      },
    }),
  },
});

export default theme;
