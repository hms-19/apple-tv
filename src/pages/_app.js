import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "../store";
import Heading from "../components/Heading";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Heading />
      <Component {...pageProps} />
    </Provider>
  );
}
