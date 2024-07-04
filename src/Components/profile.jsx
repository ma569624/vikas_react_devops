import React from 'react';
import './profileStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
const PersonalInfoTable = () => {
  return (
    <>
    <Header />
    <div>
      <section className="profiletable">
        <div className="container">
          <table className="table-fill">
            <thead>
              <tr>
                <th colSpan="2">PERSONAL INFORMATION</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              <tr>
                <td>Client Name :</td>
                <td></td>
              </tr>
              <tr>
                <td>Client Code :</td>
                <td>C10615</td>
              </tr>
              <tr>
                <td>Chips :</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Date Of Joining :</td>
                <td>16-05-2024</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>INDIA</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="2">
                  <a className='backto' href="/index">BACK TO MAIN MENU</a>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </section>
    </div>
    </>
  );
};

export default PersonalInfoTable;
