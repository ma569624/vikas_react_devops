import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
import './statementStyle.css';
import Header from './header';

const AccountStatement = () => {
  const [currentPage1, setCurrentPage1] = useState(1);
  const rowsPerPage1 = 2;
  const [currentPage2, setCurrentPage2] = useState(1);
  const rowsPerPage2 = 2;
  const [selectedAmount, setSelectedAmount] = useState('');
  const amounts = [100, 200, 300, 400, 500];
  const [currentPage3, setCurrentPage3] = useState(1);
  const rowsPerPage3 = 2;
  const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility

  const tableData1 = [
    { date: '29 May 24', description: '( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]', prevBal: '100000' },
    { date: '30 May 24', description: 'Deposit from XYZ Company', prevBal: '9500' },
    { date: '28 May 24', description: 'Online purchase at ABC Store', prevBal: '30000' },
    { date: '27 May 24', description: 'Salary credited by Employer', prevBal: '0' },
  ];

  const tableData2 = [
    { date: '01 Jun 24', description: 'Bill payment to ABC Services', prevBal: '15000', extraData: '500' },
    { date: '02 Jun 24', description: 'ATM withdrawal', prevBal: '12000', extraData: '600' },
    { date: '03 Jun 24', description: 'Transfer to John Doe', prevBal: '8000', extraData: '700' },
    { date: '04 Jun 24', description: 'Interest credited', prevBal: '16000', extraData: '800' },
  ];

  const tableData3 = [
    { date: '29 May 24', description: '[Abhi . B. H. E. L]', prevBal: '00' },
    { date: '30 May 24', description: 'Deposit from XYZ Company', prevBal: '9500' },
    { date: '28 May 24', description: 'Online purchase at ABC Store', prevBal: '000' },
    { date: '27 May 24', description: 'Salary credited by Employer', prevBal: '0' },
  ];

  const totalPages1 = Math.ceil(tableData1.length / rowsPerPage1);
  const totalPages2 = Math.ceil(tableData2.length / rowsPerPage2);
  const totalPages3 = Math.ceil(tableData3.length / rowsPerPage3);

  const handlePageChange1 = (page) => {
    if (page > 0 && page <= totalPages1) setCurrentPage1(page);
  };

  const handlePageChange2 = (page) => {
    if (page > 0 && page <= totalPages2) setCurrentPage2(page);
  };

  const handlePageChange3 = (page) => {
    if (page > 0 && page <= totalPages3) setCurrentPage3(page);
  };

  const indexOfLastRow1 = currentPage1 * rowsPerPage1;
  const indexOfFirstRow1 = indexOfLastRow1 - rowsPerPage1;
  const currentRows1 = tableData1.slice(indexOfFirstRow1, indexOfLastRow1);

  const indexOfLastRow2 = currentPage2 * rowsPerPage2;
  const indexOfFirstRow2 = indexOfLastRow2 - rowsPerPage2;
  const currentRows2 = tableData2.slice(indexOfFirstRow2, indexOfLastRow2);

  const indexOfLastRow3 = currentPage3 * rowsPerPage3;
  const indexOfFirstRow3 = indexOfLastRow3 - rowsPerPage3;
  const currentRows3 = tableData3.slice(indexOfFirstRow3, indexOfLastRow3);

  const handleAmountClick = (amount) => setSelectedAmount(amount.toString());
  const handleClearAmount = () => setSelectedAmount('');
  const handleDone = () => {
    console.log('Selected Amount:', selectedAmount);
    // Add your logic here for what to do with the selected amount
  };

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <>
      <Header />
      <div className="container tableee">
        {/* First Table */}
        <div className="row mt-5">
          <div className="col">
            <div className="card bg-default shadow">
              <div className="table-responsive">
                <table className="table align-items-center table-dark table-flush">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Min: 200 Max: 500000</th>
                      <th scope="col">LAGAI</th>
                      <th scope="col">KHAI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows1.map((row, index) => (
                      <tr key={index}>
                        <td>{row.description}</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <span className="mb-0 text-sm">{row.date}</span>
                            </div>
                          </div>
                        </th>
                        <td>
                          <div>{row.prevBal}</div>
                          <div>100</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer py-4 fixed-footer">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center mb-0">
                    <li className={`page-item ${currentPage1 === 1 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" tabIndex="-1" onClick={() => handlePageChange1(currentPage1 - 1)}>
                        <GrFormPrevious />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    {[...Array(totalPages1)].map((_, index) => (
                      <li className={`page-item ${currentPage1 === index + 1 ? 'active' : ''}`} key={index}>
                        <a className="page-link" href="#!" onClick={() => handlePageChange1(index + 1)}>
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage1 === totalPages1 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" onClick={() => handlePageChange1(currentPage1 + 1)}>
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

        {/* Second Table */}
        <div className="row mt-5">
          <div className="col">
            <div className="card bg-default shadow">
              <div className="table-responsive">
                <table className="table align-items-center table-dark table-flush">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">SESSION𝓲</th>
                      <th scope="col">NOT</th>
                      <th scope="col">YES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows2.map((row, index) => (
                      <tr key={index}>
                        <td>{row.description}</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <span className="mb-0 text-sm">{row.date}</span>
                              <div className="money">{row.extraData}</div>
                            </div>
                          </div>
                        </th>
                        <td>
                          <div className="money">{row.extraData}</div>
                          <span className="badge badge-dot mr-4">
                            {row.prevBal}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer py-4 fixed-footer">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center mb-0">
                    <li className={`page-item ${currentPage2 === 1 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" tabIndex="-1" onClick={() => handlePageChange2(currentPage2 - 1)}>
                        <GrFormPrevious />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    {[...Array(totalPages2)].map((_, index) => (
                      <li className={`page-item ${currentPage2 === index + 1 ? 'active' : ''}`} key={index}>
                        <a className="page-link" href="#!" onClick={() => handlePageChange2(index + 1)}>
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage2 === totalPages2 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" onClick={() => handlePageChange2(currentPage2 + 1)}>
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

        {/* Third Table */}
        <div className="row mt-5">
          <div className="col">
            <div className="card bg-default shadow">
              <div className="table-responsive">
                <table className="table align-items-center table-dark table-flush">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">RUNNER</th>
                      <th scope="col">DATE</th>
                      <th scope="col">RUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows3.map((row, index) => (
                      <tr key={index}>
                        <td>{row.description}</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <span className="mb-0 text-sm">{row.date}</span>
                            </div>
                          </div>
                        </th>
                        <td>
                          <div>{row.prevBal}</div>
                          <div>100</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer py-4 fixed-footer">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center mb-0">
                    <li className={`page-item ${currentPage3 === 1 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" tabIndex="-1" onClick={() => handlePageChange3(currentPage3 - 1)}>
                        <GrFormPrevious />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    {[...Array(totalPages3)].map((_, index) => (
                      <li className={`page-item ${currentPage3 === index + 1 ? 'active' : ''}`} key={index}>
                        <a className="page-link" href="#!" onClick={() => handlePageChange3(index + 1)}>
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage3 === totalPages3 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" onClick={() => handlePageChange3(currentPage3 + 1)}>
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

        {/* Select an Amount */}
        <div className="main-price">
          <div className="row mt-5">
            <div className="col">
              <div className="card amountt">
                <div className="card-header bg-transparent">
                  <h3 className="mb-0 text-dark">Select an Amount</h3>
                </div>
                <div className="card-body">
                  <div className="d-flex box-price">
                    {amounts.map((amount, index) => (
                      <button
                        key={index}
                        className="btn btn-outline-primary"
                        onClick={() => handleAmountClick(amount)}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <form className="mt-4">
                    <div className="form-group">
                      <label className="mb-2 text-dark" htmlFor="selectedAmount">Selected Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        id="selectedAmount"
                        value={selectedAmount}
                        readOnly
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClearAmount}
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleDone}
                      >
                        Done
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Back to Main Menu Button */}
        <div className="row mt-5">
          <div className="col">
            <div className="card bg-default shadow">
              <div className="table-responsive">
                <table className="table align-items-center table-dark table-flush">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">RUNNER</th>
                      <th scope="col">DATE</th>
                      <th scope="col">RUN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows1.map((row, index) => (
                      <tr key={index}>
                        <td>{row.description}</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <span className="mb-0 text-sm">{row.date}</span>
                            </div>
                          </div>
                        </th>
                        <td>
                          <div>{row.prevBal}</div>
                          <div>100</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer py-4 fixed-footer">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center mb-0">
                    <li className={`page-item ${currentPage3 === 1 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" tabIndex="-1" onClick={() => handlePageChange3(currentPage3 - 1)}>
                        <GrFormPrevious />
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    {[...Array(totalPages1)].map((_, index) => (
                      <li className={`page-item ${currentPage3 === index + 1 ? 'active' : ''}`} key={index}>
                        <a className="page-link" href="#!" onClick={() => handlePageChange3(index + 1)}>
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage3 === totalPages1 ? 'disabled' : ''}`}>
                      <a className="page-link" href="#!" onClick={() => handlePageChange3(currentPage3 + 1)}>
                        <MdNavigateNext />
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>


          {/* Popup Button */}
          <div className="row mt-3">
            <div className="col text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={togglePopup}
              >
                All Events
              </button>
              {showPopup && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">All Event</h5>
                        {/* <button type="button" className="close" onClick={togglePopup}>
                          <span aria-hidden="true">&times;</span>
                        </button> */}
                      </div>
                      <div className="modal-body">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Event </th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Data 1</td>
                              <td>Data 2</td>
                            </tr>
                            <tr>
                              <td>Data 3</td>
                              <td>Data 4</td>
                            </tr>
                            {/* Add more rows as needed */}
                          </tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={togglePopup}>Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="mt-4">
            <div className="d-flex justify-content-center">
              <Link to="/index" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountStatement;
