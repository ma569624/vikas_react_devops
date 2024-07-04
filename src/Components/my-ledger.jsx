import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import './statementStyle.css';

import Header from './header';

const AccountStatement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;

  const tableData = [
    {
      date: '29 May 24',
      description: 'Chips withdrawal from Sumitjjjjj ( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]',
      prevBal: '100000',
      credit: '0',
      debit: '99500',
      commPlus: '0',
      balance: '500',
    },
    {
      date: '30 May 24',
      description: 'Deposit from XYZ Company',
      prevBal: '9500',
      credit: '5000',
      debit: '0',
      commPlus: '0',
      balance: '14500',
    },
    {
      date: '28 May 24',
      description: 'Online purchase at ABC Store',
      prevBal: '30000',
      credit: '0',
      debit: '2000',
      commPlus: '0',
      balance: '28000',
    },
    {
      date: '27 May 24',
      description: 'Salary credited by Employer',
      prevBal: '0',
      credit: '25000',
      debit: '0',
      commPlus: '0',
      balance: '25000',
    },
  ];

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
    <Header />
    <div className="container myLedger">
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
                  {currentRows.map((row, index) => (
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
                    <a className="page-link" href="#!" tabIndex="-1" onClick={() => handlePageChange(currentPage - 1)}>
                      <GrFormPrevious />
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                      <a className="page-link" href="#!" onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
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
