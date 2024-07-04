import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import './statementStyle.css';
import Header from './header' // Import the Header component



const AccountStatement = () => {
  const [activeTab, setActiveTab] = useState('statement1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const tabNames = {
    statement1: 'All',
    statement2: 'P&L',
    statement3: 'PDC',
    statement4: 'Account'
  };

  const tableContents = {
    statement1: [
      { date: '29 May 24', description: 'Chips withdrawal from Sumitjjjjj ( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]', prevBal: '100000', credit: '0', debit: '99500', commPlus: '0', balance: '500' },
      { date: '28 May 24', description: 'Another transaction', prevBal: '500', credit: '0', debit: '100', commPlus: '0', balance: '400' },
      { date: '27 May 24', description: 'Yet another transaction', prevBal: '400', credit: '0', debit: '50', commPlus: '0', balance: '350' },
      { date: '26 May 24', description: 'More transactions', prevBal: '350', credit: '0', debit: '25', commPlus: '0', balance: '325' },
      { date: '25 May 24', description: 'Transaction again', prevBal: '325', credit: '0', debit: '75', commPlus: '0', balance: '250' },
      { date: '24 May 24', description: 'Transaction details', prevBal: '250', credit: '0', debit: '50', commPlus: '0', balance: '200' },
      { date: '23 May 24', description: 'More transaction details', prevBal: '200', credit: '0', debit: '100', commPlus: '0', balance: '100' },
    ],
    statement2: [
      { date: '30 May 24', description: 'Deposit from XYZ Company', prevBal: '9500', credit: '5000', debit: '0', commPlus: '0', balance: '14500' },
    ],
    statement3: [
      { date: '28 May 24', description: 'Online purchase at ABC Store', prevBal: '30000', credit: '0', debit: '2000', commPlus: '0', balance: '28000' },
    ],
    statement4: [
      { date: '27 May 24', description: 'Salary credited by Employer', prevBal: '0', credit: '25000', debit: '0', commPlus: '0', balance: '25000' },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(tableContents[activeTab].length / rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedRows = tableContents[activeTab].slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
   <Header /> {/* Include the Header component */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="endDate" className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <ul className="nav nav-tabs">
              {Object.keys(tableContents).map((tabKey) => (
                <li className="nav-item" key={tabKey}>
                  <a
                    className={`nav-link ${activeTab === tabKey ? 'active' : ''}`}
                    onClick={() => handleTabChange(tabKey)}
                    href="#!"
                  >
                    {tabNames[tabKey]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <div className="tab-content">
            {Object.keys(tableContents).map((tabKey) => (
              <div className={`tab-pane fade ${activeTab === tabKey ? 'show active' : ''}`} key={tabKey}>
                <div className="row mt-5">
                  <div className="col">
                    <div className="card bg-default shadow">
                      <div className="table-responsive">
                        <table className="table align-items-center table-dark table-flush">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">DATE</th>
                              <th scope="col">DESCRIPTION</th>
                              <th scope="col">Prev. Bal</th>
                              <th scope="col">CREDIT</th>
                              <th scope="col">DEBIT</th>
                              <th scope="col">Comm+</th>
                              <th scope="col">BALANCE</th>
                            </tr>
                          </thead>
                          <tbody>
                            {displayedRows.map((row, index) => (
                              <tr key={index}>
                                <th scope="row">
                                  <div className="media align-items-center">
                                    <div className="media-body">
                                      <span className="mb-0 text-sm">{row.date}</span>
                                    </div>
                                  </div>
                                </th>
                                <td>{row.description}</td>
                                <td>
                                  <span className="badge badge-dot mr-4">
                                    {row.prevBal}
                                  </span>
                                </td>
                                <td>
                                  <div className="avatar-group">
                                    <span>{row.credit}</span>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <span className="mr-2">{row.debit}</span>
                                  </div>
                                </td>
                                <td className="text-right">
                                  <span className="mr-2">{row.commPlus}</span>
                                </td>
                                <td className="text-right">
                                  <span className="mr-2">{row.balance}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="card-footer py-4 fixed-footer">
                        <nav aria-label="...">
                          <ul className="pagination justify-content-center mb-0">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                              <a className="page-link" href="#!" onClick={() => handlePageChange(currentPage - 1)}>
                                <GrFormPrevious />
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            {Array.from({ length: totalPages }, (_, i) => (
                              <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                                <a className="page-link" href="#!" onClick={() => handlePageChange(i + 1)}>
                                  {i + 1}
                                </a>
                              </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                              <a className="page-link" href="#!" onClick={() => handlePageChange(currentPage + 1)}>
                                <MdNavigateNext />
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="d-flex justify-content-center">
            <a href="/index" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default AccountStatement;
