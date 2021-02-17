import {useEffect, useState} from 'react';
import QrReader from 'react-qr-scanner';
import PropTypes from 'prop-types';

import {
  checkInvoiceObject,
  isObjectStringified,
} from '../../../utils/functions';
import {
  SCAN_INSTRUCTIONS_MESSAGE,
  INAVLID_QR_MESSAGE,
  SWITCH_OFF_MESSAGE,
  SWITCH_ON_MESSAGE,
} from '../../../utils/messages';

import Button from '../../common/Button';

import './styles.css';

const ScanCode = ({controls, invoiceData}) => {
  const {nextStep} = controls;

  const [active, setActive] = useState(true);
  const [error, setError] = useState('');
  const msErrorHidden = 3500;

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(''), msErrorHidden);
    }
  }, [error]);

  const handleScan = (data) => {
    console.log(data);
    if (data) {
      const invoiceData = isObjectStringified(data.text);
      const validInvoiceData = checkInvoiceObject(invoiceData);

      if (!validInvoiceData) {
        handleError(INAVLID_QR_MESSAGE);
        return;
      }

      handleInvoice(invoiceData);
    }
  };

  const handleInvoice = (invoice) => {
    const {uploadInvoice} = invoiceData;
    uploadInvoice(invoice);
    nextStep();
  };

  const handleError = (err) => {
    setError(err);
    setActive(false);
  };

  const toggleCamera = () => {
    setError('');
    setActive(!active);
  };

  const showError = () => {
    return <span className="error">{error}</span>;
  };

  return (
    <>
      <h1>{SCAN_INSTRUCTIONS_MESSAGE}</h1>

      <div className="video__container ">
        {active && (
          <div className="roll-in">
            <QrReader delay="false" onError={handleError} onScan={handleScan} />
          </div>
        )}
      </div>
      <div className="button__container">
        <Button onClick={toggleCamera} role="primary">
          {active ? SWITCH_OFF_MESSAGE : SWITCH_ON_MESSAGE}
        </Button>
      </div>

      {error && showError()}
    </>
  );
};

ScanCode.propTypes = {
  invoiceData: PropTypes.shape({
    uploadInvoice: PropTypes.func.isRequired,
  }),
  controls: PropTypes.shape({
    prevStep: PropTypes.func,
    nextStep: PropTypes.func,
  }),
};

export default ScanCode;
