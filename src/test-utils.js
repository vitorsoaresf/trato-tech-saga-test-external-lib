import store from "store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }) => {
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>;
};

export const renderComponentWithProviders = (ui, options) => {
  render(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";
export { renderComponentWithProviders as render };
