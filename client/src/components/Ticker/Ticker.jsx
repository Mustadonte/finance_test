import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export const Ticker = ({ data }) => {
  const date = new Date(data.last_trade_time).toLocaleString('uk');

  const newData = { ...data };
  newData.last_trade_time = date;
  newData.change > 0
    ? (newData.trending = <TrendingUpIcon color="success" />)
    : (newData.trending = <TrendingDownIcon color="warning" />);

  return (
    <>
      {Object.values(newData).map(value => (
        <td key={nanoid()}>{value}</td>
      ))}
    </>
  );
};

Ticker.propTypes = {
  data: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    change: PropTypes.number.isRequired,
    change_percent: PropTypes.number.isRequired,
    dividend: PropTypes.string.isRequired,
    yield: PropTypes.string.isRequired,
    last_trade_time: PropTypes.string.isRequired,
  }),
};
