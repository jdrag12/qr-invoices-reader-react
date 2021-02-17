import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../common/Button";

import Questions from "../Questions";

const InvoiceDialog = ({
  invoiceData: { invoice: uploadedInvoice, addInvoiceToRegisterList },
  controls,
}) => {
  const history = useHistory();
  const [invoice, setInvoice] = useState(uploadedInvoice);
  const [answers, setAnswers] = useState({
    firstAnswer: "",
    secondAnswer: 1,
  });

  const { sender, invoice_no } = invoice;
  const { prevStep } = controls;

  useEffect(() => {
    if (answers.firstAnswer === "no") {
      setInvoice({
        ...invoice,
        refunded_percentage: null,
        refunded_amount: null,
        registration_date: new Date(),
        refunded: false,
      });
    } else if (answers.firstAnswer === "yes") {
      const percentage = answers.secondAnswer;

      setInvoice({
        ...invoice,
        registration_date: new Date(),
        refunded: true,
        refunded_percentage: Number(percentage),
        refunded_amount: Math.round(
          (percentage / 100) * invoice.amount + invoice.vat[0].amount
        ),
      });
    }
  }, [answers]);

  const registerInvoice = () => {
    addInvoiceToRegisterList(invoice);
    history.push("/");
  };

  const handleAnswers = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  return (
    uploadedInvoice && (
      <>
        <div>
          <span>
            {" "}
            Invoice no: <strong>{invoice_no}</strong>, from {sender} scanned
          </span>

          <Questions answers={answers} handleAnswers={handleAnswers} />
          <div className="button__container">
            <Button role="secondary" onClick={() => prevStep()}>
              Scan again
            </Button>
            <Button
              role="primary"
              onClick={() => registerInvoice()}
              disabled={!answers.firstAnswer}
            >
              Submit Invoice
            </Button>
          </div>
        </div>
      </>
    )
  );
};

InvoiceDialog.propTypes = {
  invoiceData: PropTypes.shape({
    invoice: PropTypes.object.isRequired,
    addInvoiceToRegisterList: PropTypes.func.isRequired,
  }),
  controls: PropTypes.shape({
    prevStep: PropTypes.func,
    nextStep: PropTypes.func,
  }),
};

export default InvoiceDialog;
