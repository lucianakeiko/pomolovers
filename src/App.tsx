import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { EstilosGlobais } from "./styles/global";
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
    <EstilosGlobais />
    ploc
    
      <Router />
    </BrowserRouter>
    </ThemeProvider>
  );
}
