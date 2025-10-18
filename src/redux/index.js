import { Provider } from "react-redux";
import { store } from "./redux/store";

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
