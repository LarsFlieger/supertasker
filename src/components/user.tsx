import { memo, useState } from 'react';
import UserEdit from './user-edit';
import { useAppDispatch } from '../hooks';
import { removeUser } from '../features/users-slice';

type UserProps = {
  user: User;
};

const toggle = (b: boolean): boolean => !b;

const User = ({ user }: UserProps) => {
  const dispatch = useAppDispatch();
  const [editing, setEditing] = useState(false);
  const removeUserUi = ({ id }: { id: string }) => {
    dispatch(removeUser(id));
  };

  return (
    <article className="user">
      <header className="user-header">
        <h2 className="user-alter-ego">{user.alterEgo}</h2>
        <span className="user-real-name">{user.realName}</span>
      </header>
      <div className="button-group">
        <button className="small" onClick={() => setEditing(toggle)}>
          Edit
        </button>
        <button
          className="destructive small"
          aria-label="Remove"
          onClick={() => removeUserUi({ id: user.id })}
        >
          Remove
        </button>
      </div>
      {editing && <UserEdit user={user} />}
    </article>
  );
};

export default memo(User);
