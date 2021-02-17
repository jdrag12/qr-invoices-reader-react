import { render, screen } from "@testing-library/react";

import InvoicesList from "./index";
import { NO_INVOICE_MESSAGE } from "../../../utils/messages";

test("if the component has not any invoices it renders the no invoice message ", () => {
  const message = NO_INVOICE_MESSAGE;
  render(<InvoicesList invoices={[]} />);
  expect(screen.getByText(message)).toBeInTheDocument();
});

test("if the component has not any invoices ,the list container is not rendered", () => {
  render(<InvoicesList invoices={[]} />);
  expect(screen.queryByTestId("list-container")).not.toBeInTheDocument();
});

test("if the component has an invoice it does not render the no invoice message ", () => {
  const message = NO_INVOICE_MESSAGE;
  const mockInvoice = {
    sender: "IKEA BV",
    invoice_no: "2020000042",
    description: "Kallax",
    amount: 59.95,
    vat: [
      {
        rate: 21,
        amount: 10.4,
      },
    ],
    registration_date: new Date(),
    refunded: true,
    refunded_percentage: 1,
    refunded_amount: 11,
  };

  render(<InvoicesList invoices={[mockInvoice]} />);
  expect(screen.queryByText(message)).not.toBeInTheDocument();
});

test("if the component has an invoice, the list container is rendered", () => {
  const mockInvoice = {
    sender: "IKEA BV",
    invoice_no: "2020000042",
    description: "Kallax",
    amount: 59.95,
    vat: [
      {
        rate: 21,
        amount: 10.4,
      },
    ],
    registration_date: new Date(),
    refunded: true,
    refunded_percentage: 1,
    refunded_amount: 11,
  };

  render(<InvoicesList invoices={[mockInvoice]} />);
  expect(screen.queryByTestId("list-container")).toBeInTheDocument();
});
