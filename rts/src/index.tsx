import ReactDOM from 'react-dom';
// import GuestList from './state/GuestsList';
//import UserSearch from './state/UserSearch';
//import EventComponent from './EventComponent/EventComponent';
// import UserSearch from './Classes/UserSearch';
import UserSearch from './refs/UserSearch';

const App = () => {
  return <UserSearch/>
};

ReactDOM.render(<App />, document.querySelector('#root'));
