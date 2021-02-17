import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {QR_CODE_EXAMPLE_1} from '../../utils/mocks/qr_codes_links';

import '../../App.css';

import Navbar from '../../components/common/Navbar';
import InvoicesList from '../../components/invoices/InvoicesList';

const InvoicesPage = ({invoices}) => {
  return (
    <>
      <Navbar>
        <a href={QR_CODE_EXAMPLE_1} target="blank" rel="nofollow">
          QR Invoice example
        </a>
        <Link to="/add-invoice">Add Invoice</Link>
      </Navbar>
      <section className="body__container">
        <h1>Registered Invoices</h1>
        <InvoicesList invoices={invoices} />
      </section>
    </>
  );
};

InvoicesPage.propTypes = {
  invoices: PropTypes.array,
};

export default InvoicesPage;
