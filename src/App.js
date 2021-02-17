import {useState} from 'react';

import './App.css';
import Invoices from './pages/Invoices';
import AddInvoice from './pages/AddInvoice';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  const [invoices, setInvoices] = useState([]);

  const addInvoiceToRegisterList = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Invoices invoices={invoices} />
          </Route>
          <Route path="/add-invoice" exact>
            <AddInvoice addInvoiceToRegisterList={addInvoiceToRegisterList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
