import {useState, useEffect} from 'react';
import { createRequest } from './api/createRequest';
import { UserType } from './components/UserType';
import { UserList } from './components/UserList';
import { UserDetailsType } from './components/UserDetailsType';
import { UserDetails } from './components/UserDetails';
import './App.css';

function App() {
  const listUsersServ = async (
    url: string,
    callback: (data: UserType[]) => void
  ) => {
    createRequest({
      url,
      sendMethod: 'GET',
      callback
    });
  }

  const detailsUserServ = async (
    url: string,
    id: number,
    callback: any
  ) => {
    createRequest({
      url,
      sendMethod: 'GET',
      id,
      callback
    });
  }

  const initialUsers = [
    {
      id: 0,
      name: 'test'
    }
  ];
  const [users, setUsers] = useState(initialUsers);

  const initialUserState = {
    id: -1,
    name: '',
    avatar: '',
    details: {
      city: '',
      company: '',
      position: ''
    }
  };
  const [details, setDetails] = useState(initialUserState);

  const [idDetailed, setId] = useState(-1);

  const urlUsers = ' https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
  const urlUser = ' https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

  //fetch all the users only once
  useEffect(() => {
    const resp = listUsersServ(urlUsers, (data: UserType[]) => {
      setUsers(data);
    })

    return () => {

    }
  }, []);

  //fetch detailed information, when idDetailed is changed
  useEffect(() => {
    const resp = detailsUserServ(urlUser, idDetailed, (data: UserDetailsType) => {
      setDetails(data);
    })

    return () => {

    }
  }, [idDetailed]);

  const getDetails = (id: number) => {
    if (id !== idDetailed) {
      setId(id);
    }
  }

  return (
    <div className='container'>
        <UserList users={users} getDetails={getDetails}/>
        <UserDetails details={details}/>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  );
}

export default App;
