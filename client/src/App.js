import './App.css';
import { TableTicker } from './components/TableTicker/TableTicker';

import { TickerList } from './components/TickerList/TickerList';

function App() {
  return (
    <TableTicker>
      <TickerList />
    </TableTicker>
  );
}

export default App;
