import { ChangeEventHandler } from 'react';
import { useAppDispatch } from '../hooks';
import { updateUser } from '../features/users-slice';

type UserEditProps = {
  user: User;
};

const UserEdit = ({ user }: UserEditProps) => {
  const id = (p: keyof User) => `edit-user-${user.id}-${p}`;

  const dispatch = useAppDispatch();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    dispatch(
      updateUser({
        id: user.id,
        [name]: value,
      }),
    );
  };

  return (
    <div className="user-edit">
      <label htmlFor={id('realName')}>
        Real Name
        <input
          id={id('realName')}
          type="text"
          value={user.realName}
          name="realName"
          placeholder="Real Name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor={id('alterEgo')}>
        Alter Ego
        <input
          id={id('alterEgo')}
          type="text"
          value={user.alterEgo}
          name="alterEgo"
          placeholder="Alter Ego"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default UserEdit;
