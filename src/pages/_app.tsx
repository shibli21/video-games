import { ChakraProvider } from "@chakra-ui/react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Footer } from "../components/Footer";
import theme from "../theme/theme";
import "../styles/global.css";

export const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
        <Footer />
        <ReactQueryDevtools />
      </ChakraProvider>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
