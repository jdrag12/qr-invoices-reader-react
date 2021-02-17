import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the App and shows the title of the initial page", () => {
  const title = "Registered Invoices";
  render(<App />);
  expect(screen.getByText(title)).toBeInTheDocument();
});
