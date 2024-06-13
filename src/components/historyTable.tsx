import React, { useMemo } from 'react';

export interface HistoricalPrice {
  priceTime: string;
  price: number;
}

interface Props {
  history: HistoricalPrice[];
}

const HistoryTable: React.FC<Props> = ({ history }) => {
  const meaningfulHistory = useMemo<HistoricalPrice[]>(() => history.filter((item, index) => index == 0 || index > 0 && item.price != history[index - 1].price), [history]);

  return (
    <div className="table-history">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Time</th>
            <th>Price (EUR)</th>
          </tr>
        </thead>
        <tbody>
          {meaningfulHistory.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.priceTime}</td>
              <td>{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;