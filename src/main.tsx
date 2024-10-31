//todo Import App
import App from "./App.tsx";

//todo Import store
import { store } from "./store";

//todo Import packages
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//todo Import mui
import { StyledEngineProvider } from "@mui/material";

//todo Import static files and cdn
import "./style/index.scss";
import "flag-icon-css/css/flag-icons.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StyledEngineProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </BrowserRouter>
);
