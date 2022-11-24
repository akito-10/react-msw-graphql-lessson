import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { worker } from "./mocks/browser";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const rootElement = document.getElementById("root");
const client = new ApolloClient({
  uri: "http://localhost:5173/",
  cache: new InMemoryCache(),
});

if (rootElement) {
  const root = createRoot(rootElement);

  /**
   * - set quiet to false if you want to see API responses in the console
   * - onUnhandledRequest will just hide the warnings about APIs not being intercepted
   */
  worker
    .start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    })
    .then(() => {
      return root.render(
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      );
    });
} else {
  throw new Error("No container with the name of root found");
}
