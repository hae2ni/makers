import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SWRConfig } from "swr";
import Error from "./pages/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig
      value={{
        onError: (error) => {
          if (error.status == 400) {
            return <Error />;
          }
        },
      }}>
      <App />
    </SWRConfig>
  </StrictMode>,
);
