import { Teams } from "@screens/Teams";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Teams />
    </ThemeProvider>
  );
}