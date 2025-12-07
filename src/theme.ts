import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const magenta = {
  50: "#ffe5f6",
  100: "#ffb8e6",
  200: "#ff8dd6",
  300: "#ff61c7",
  400: "#ff35b8",
  500: "#e1189f",
  600: "#b31280",
  700: "#850c63",
  800: "#550640",
  900: "#2a0324",
};

const ink = {
  50: "#f4edf6",
  100: "#d8c8df",
  200: "#b3a1c2",
  300: "#8b7ba4",
  400: "#655386",
  500: "#4c3d6c",
  600: "#352a52",
  700: "#231a38",
  800: "#120b21",
  900: "#0a0513",
};

const theme = extendTheme({
  config,
  colors: {
    magenta,
    ink,
  },
  fonts: {
    heading: "'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif",
    body: "'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif",
  },
  styles: {
    global: (props: Record<string, any>) => ({
      "html, body": {
        bg: mode("magenta.50", "ink.900")(props),
        color: mode("ink.900", "magenta.50")(props),
        backgroundImage: mode(
          "radial-gradient(circle at 20% 20%, rgba(230, 40, 150, 0.08), transparent 22%), radial-gradient(circle at 80% 0%, rgba(193, 57, 156, 0.1), transparent 18%), linear-gradient(135deg, #fff0fb 0%, #ffe8fa 50%, #f6f2ff 100%)",
          "radial-gradient(circle at 20% 20%, rgba(255,68,192,0.16), transparent 22%), radial-gradient(circle at 80% 0%, rgba(255,124,208,0.12), transparent 18%), radial-gradient(circle at 50% 100%, rgba(255,32,160,0.14), transparent 24%), linear-gradient(135deg, #0b0613 0%, #0f071b 50%, #0a0612 100%)"
        )(props),
        minHeight: "100vh",
      },
      a: {
        color: mode("magenta.600", "magenta.200")(props),
      },
      "::selection": {
        background: "magenta.500",
        color: "white",
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "magenta",
      },
      variants: {
        solid: {
          bg: "magenta.500",
          color: "white",
          _hover: {
            bg: "magenta.400",
            boxShadow: "0 0 0 1px #ff7cd0",
          },
          _active: {
            bg: "magenta.600",
          },
        },
      },
    },
    Card: {
      baseStyle: (props: Record<string, any>) => ({
        bg: mode("white", "whiteAlpha.50")(props),
        border: "1px solid",
        borderColor: mode("blackAlpha.100", "whiteAlpha.100")(props),
        backdropFilter: "blur(6px)",
        boxShadow: mode(
          "0 10px 30px rgba(0,0,0,0.08)",
          "0 20px 40px rgba(0,0,0,0.45)"
        )(props),
      }),
    },
    Input: {
      variants: {
        filled: {
          field: (props: Record<string, any>) => ({
            bg: mode("magenta.50", "whiteAlpha.100")(props),
            borderColor: mode("magenta.100", "whiteAlpha.200")(props),
            _hover: { bg: mode("magenta.100", "whiteAlpha.150")(props) },
            _focus: {
              bg: mode("magenta.100", "whiteAlpha.150")(props),
              borderColor: "magenta.400",
              boxShadow: "0 0 0 1px rgba(255,53,184,0.5)",
            },
          }),
        },
      },
    },
    Heading: {
      baseStyle: (props: Record<string, any>) => ({
        color: mode("ink.900", "magenta.50")(props),
        letterSpacing: "-0.01em",
      }),
    },
    Badge: {
      baseStyle: {
        borderRadius: "full",
        px: 2.5,
      },
    },
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: "magenta.500",
          },
        },
      },
    },
  },
});

export default theme;
