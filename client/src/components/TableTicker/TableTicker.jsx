import scss from './TableTicker.module.scss';
import { tableHeaders } from '../utils/tableHeaders';

export const TableTicker = ({ children }) => {
  return (
    <table className={scss.table}>
      <caption className={scss.title}>Stock quotes</caption>
      <thead>
        <tr>
          {tableHeaders.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
