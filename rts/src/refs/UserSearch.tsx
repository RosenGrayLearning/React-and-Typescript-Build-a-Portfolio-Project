import { useState,useRef } from 'react';

type User = { name: string; age: number };

const users: User[] = [
  { name: 'Vladi', age: 34 },
  { name: 'Anna', age: 34 },
  { name: 'Danny', age: 27 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };
  return (
    <div>
      <h1>user search</h1>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
