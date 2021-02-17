import PropTypes from "prop-types";
import Badge from "../../../components/common/Badge";

import "./styles.css";

const InvoiceItem = ({ invoice }) => {
  const {
    sender,
    invoice_no,
    description,
    amount,
    refunded,
    refunded_amount,
    refunded_percentage,
    registration_date,
  } = invoice;
  return (
    <div
      className={`card__container ${refunded && "card__container--secondary"} `}
    >
      <div className="card__header">
        <h2>Invoice nº{invoice_no}</h2>
        {refunded && <Badge>Refunded</Badge>}
      </div>
      <ul>
        <li>
          <strong>Registration date:</strong>{" "}
          <span>{registration_date.toLocaleDateString("en-NL")}</span>
        </li>
        <li>
          <strong>Sender:</strong> <span>{sender}</span>
        </li>
        <li>
          <strong>Description:</strong> <span>{description}</span>
        </li>
        <li>
          <strong>Amount:</strong> <span>{amount}€</span>
        </li>
        {refunded && (
          <>
            <li>
              <strong>Refunded amount:</strong> <span>{refunded_amount}€</span>
            </li>
            <li>
              <strong>Refunded percentage:</strong>{" "}
              <span>{refunded_percentage}%</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

InvoiceItem.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default InvoiceItem;
