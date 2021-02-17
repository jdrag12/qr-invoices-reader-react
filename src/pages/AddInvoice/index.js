import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import InvoiceDialog from "../../components/addinvoice/InvoiceDialog";
import ScanCode from "../../components/addinvoice/ScanCode";

import "./styles.css";

const SwitchScreen = ({ step, controls, invoiceData }) => {
  switch (step) {
    case 1:
      return <ScanCode controls={controls} invoiceData={invoiceData} />;
    case 2:
      return <InvoiceDialog controls={controls} invoiceData={invoiceData} />;
    default:
  }
};

const AddInvoice = ({ addInvoiceToRegisterList }) => {
  const [invoice, uploadInvoice] = useState(null);
  const [step, setStep] = useState(1);

  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  return (
    <>
      <header>
        <Link to="/">
          <div className="arrow__container">
            <span>←</span>
          </div>
        </Link>
      </header>
      <section className="body__container body__container--tight">
        <SwitchScreen
          step={step}
          controls={{ prevStep, nextStep }}
          invoiceData={{ invoice, uploadInvoice, addInvoiceToRegisterList }}
        />
      </section>
    </>
  );
};

SwitchScreen.propTypes = {
  step: PropTypes.number,
  invoiceData: PropTypes.shape({
    invoice: PropTypes.object,
    addInvoiceToRegisterList: PropTypes.func.isRequired,
  }),
  controls: PropTypes.shape({
    prevStep: PropTypes.func,
    nextStep: PropTypes.func,
  }),
};

AddInvoice.propTypes = {
  addInvoiceToRegisterList: PropTypes.func.isRequired,
};

export default AddInvoice;
