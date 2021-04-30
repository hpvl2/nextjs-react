import Link from 'next/link';
import {useState} from 'react';

const Users = () => {
  const [users, setUsers] = useState([ // users состояние, setUsers функция для изменения состояния
    {id: 1, name: 'petya'},
    {id: 2, name: 'vasya'},
  ])
  return (
    <div>
        <h1>Список пользователей</h1>
        <ul>
          {users.map(user =>
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            )}
        </ul>
    </div>
  )
}

export default Users;
