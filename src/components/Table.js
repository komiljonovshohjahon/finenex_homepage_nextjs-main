import React from "react";
import { Table } from "reactstrap";
import { FormattedMessage } from "react-intl";

const ReactTable = () => {
  return (
    <>
      <div className="react-table">
        <Table responsive>
          <thead>
            <tr>
              <th className="table-th">
                <FormattedMessage id="user" />
              </th>
              <th className="table-th">
                <FormattedMessage id="ether_address" />
              </th>
              <th className="table-th">
                <FormattedMessage id="sidechain_address" />
              </th>
              <th className="table-th">
                <FormattedMessage id="token_amount" />
              </th>
              <th className="table-th">
                <FormattedMessage id="debit" />
              </th>
              <th className="table-th">
                <FormattedMessage id="credit" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                a
              </th>
              <td className="table-td">0x12345</td>
              <td className="table-td">0x12345</td>
              <td className="table-td">1,580</td>
              <td className="table-td">1,071</td>
              <td className="table-td">100</td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                b
              </th>
              <td className="table-td">0x32345</td>
              <td className="table-td">0x32345</td>
              <td className="table-td">1,214</td>
              <td className="table-td">901</td>
              <td className="table-td">100</td>
            </tr>
            <tr className="table-tbody-tr">
              <th className="table-row" scope="row">
                c
              </th>
              <td className="table-td">0x52345</td>
              <td className="table-td">0x52345</td>
              <td className="table-td">1,532</td>
              <td className="table-td">1,056</td>
              <td className="table-td">112</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ReactTable;
