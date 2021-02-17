import { checkInvoiceObject } from "../../functions";

describe("tests for `checkInvoiceObject`function", () => {
  it("returns false if the object passed to the function has not valid invoice properties", () => {
    const mockInvoice_invalid = {
      foo: "a",
      bar: "b",
    };

    expect(checkInvoiceObject(mockInvoice_invalid)).toBe(false);
  });

  it("returns true if the object passed to the function has valid invoice properties", () => {
    const mockInvoice_valid = {
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
    };

    expect(checkInvoiceObject(mockInvoice_valid)).toBe(true);
  });

  it("returns false if the object passed to the function misses an invoice property", () => {
    const mockInvoice_invalid = {
      sender: "IKEA BV",
      //invoice_no: "2020000042",
      description: "Kallax",
      amount: 59.95,
      vat: [
        {
          rate: 21,
          amount: 10.4,
        },
      ],
    };

    expect(checkInvoiceObject(mockInvoice_invalid)).toBe(false);
  });
});
