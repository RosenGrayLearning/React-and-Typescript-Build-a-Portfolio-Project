import { useState, FC, ChangeEvent, FormEvent } from 'react';
import { useTypedselector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState('');
  const { data, error, loading } = useTypedselector(
    (state) => state.repositories
  );
  const { searchRepositories } = useActions();

  console.log(data);

  const setTermHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input onChange={(e) => setTerm(e.target.value)} type="text" />
        <button>search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
