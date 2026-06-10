import './App.css';
import { format } from 'date-fns';

function App() {
  return (
    <div>
      <p>
        {format(new Date(), 'PPpp')}
      </p>
    </div>
  );
}

export default App;
