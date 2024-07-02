import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import './statementStyle.css';

const AccountStatement = () => {
  return (
    <div className="container mt-4">
    
    <div className="row mt-5">
      <div className="col">
        <div className="card bg-default shadow">
          <div className="table-responsive">
            <table className="table align-items-center table-dark table-flush">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">RUNNER	</th>
                  <th scope="col">DATE</th>
                  <th scope="col">RATE </th>
                  <th scope="col">RESULT</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">MODE</th>
                  <th scope="col">P&L</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: '6 over run WI',
                    description: '27-05-2024 2:23 AM',
                    prevBal: '64.00	',
                    credit: '83',
                    debit: '5000',
                    commPlus: 'NO',
                    balance: '-5000',
                  },
                  {
                    date: '6 over run WI',
                    description: '27-05-2024 2:23 AM',
                    prevBal: '64.00	',
                    credit: '83',
                    debit: '5000',
                    commPlus: 'NO',
                    balance: '-5000',
                  },
                 
                ].map((row, index) => (
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
            <div className="card-footer py-4">
              <nav aria-label="...">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">
                    <GrFormPrevious />
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
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
    </div>
  
  );
};

export default AccountStatement;
