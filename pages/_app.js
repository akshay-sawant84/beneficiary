import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "@/page-components/AppBar";
import ThemedApp from "@/page-components/ThemedApp";
import { i18n } from "../next-i18next.config.mjs";

const inter = Inter({ subsets: ["latin"] });

const emptyInitialI18NextConfig = {
  i18n: {
    defaultLocale: i18n.defaultLocale,
    locales: i18n.locales,
  },
};

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp>
          <CssBaseline />
          <main className={inter.className}>
            <ButtonAppBar />
            <Component {...pageProps} />
          </main>
        </ThemedApp>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App, emptyInitialI18NextConfig);
