import React from 'react';

const TableRow = ({ row }) => {
  return Object.keys(row).map(key => <td>{row[key]}</td>);
};

const Table = ({ columns, content }) => {
  return (
    <div id="tableContainer" className="mx-auto">
      <table className="table table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            {columns.map(col => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map(row => (
            <tr>{<TableRow row={row} />}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
