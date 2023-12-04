import { UserType } from "./UserType";

export const UserList = (props: {users: UserType[], getDetails: (id: number) => void}) => {
    const {users, getDetails} = props;

    return(
        <ul className="userlist">
            {users.map((user: UserType) => {
                return (
                    <li className="userlist__item" id="{user.id}" onClick={() => getDetails(user.id)}>
                        {user.name}
                    </li>
                )
            })}
        </ul>
    )
}
