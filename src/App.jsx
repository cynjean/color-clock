import './App.css';
import { format } from 'date-fns';
// Main application component that displays the clock
function App() {
  return (
    <div>
      {/*Displays the live date and time*/}
      <p>
        {/* convert raw date into readable format using PPpp*/}
        {format(new Date(), 'PPpp')}
      </p>
    </div>
  );
}

export default App;
