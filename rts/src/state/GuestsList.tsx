import { useState, ChangeEvent } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClickHandler = () => {
    setName('');
    setGuests([...guests, name]);
  };
  const onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const renderGuests = (): JSX.Element[] => {
    return guests.map((guest: string) => <li key={guest}>{guest}</li>);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>{renderGuests()}</ul>
      <input value={name} onChange={onChangehandler} type="text" />
      <button onClick={onClickHandler}>Add Guest</button>
    </div>
  );
};

export default GuestList;
