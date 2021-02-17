import PropTypes from "prop-types";
import { NO_INVOICE_MESSAGE } from "../../../utils/messages";

import InvoiceItem from "../InvoiceItem";

import "./styles.css";

const InvoicesList = ({ invoices }) => {
  const anyInvoice = invoices && invoices.length > 0;

  return anyInvoice ? (
    <div className="list__container" data-testid="list-container">
      {invoices.map((invoice) => {
        return <InvoiceItem key={invoice.invoice_no} invoice={invoice} />;
      })}
    </div>
  ) : (
    <div>{NO_INVOICE_MESSAGE}</div>
  );
};

InvoicesList.propTypes = {
  invoices: PropTypes.array,
};

export default InvoicesList;
