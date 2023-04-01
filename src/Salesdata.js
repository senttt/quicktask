import React from "react";
import "./Salesdata.css";

function Salesdata() {
  return (
    <div>
      <header>
        <h1>
          <p style={{ color: "green" }}> QuickTask </p>
        </h1>
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="#">Reports</a>
      </nav>

      <section>
        <h2>Sales Data</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Quantity Sold</th>
              <th>Price per Unit</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-03-31</td>
              <td>Product A</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-03-30</td>
              <td>Product B</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-03-29</td>
              <td>Product C</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">Total Sales:</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </section>

      <footer>
        <p>&copy; 2023 QuickTask. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Salesdata;
