import { Ticker } from '../Ticker/Ticker';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const TickerList = () => {
  const [tickers, setTickers] = useState([]);
  const socket = io.connect('http://localhost:4000');

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', data => {
      setTickers(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      {tickers.map(ticker => (
        <tr key={nanoid()}>
          <Ticker data={ticker} key={nanoid()} />
        </tr>
      ))}
    </>
  );
};
