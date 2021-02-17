export const checkInvoiceObject = (invoice) => {
  if (typeof invoice !== "object") {
    return false;
  }

  const invoiceProperties = [
    "sender",
    "invoice_no",
    "description",
    "amount",
    "vat",
  ];

  return invoiceProperties.every((property) =>
    invoice.hasOwnProperty(property)
  );
};

export const isObjectStringified = (obj) => {
  try {
    return JSON.parse(obj);
  } catch (error) {
    return false;
  }
};
