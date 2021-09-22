import ReactDOM from 'react-dom';
// import GuestList from './state/GuestsList';
import UserSearch from './state/UserSearch';

const App = () => {
  return <UserSearch />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
