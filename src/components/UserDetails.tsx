import { UserDetailsType } from "./UserDetailsType";

export const UserDetails = (props: {details: UserDetailsType}) => {

    const {details} = props;

    
    if (details['name'].length) {
        return (
            <div className="userdetails">
                <div className="userdetails__avatar">
                    <img src={details.avatar} alt="avatar"/>
                </div>
                <div className="userdetails__field_name">
                    {details.name}
                </div>
                <div className="userdetails__field">
                    City: {details.details.city}
                </div>
                <div className="userdetails__field">
                    Company: {details.details.company}
                </div>
                <div className="userdetails__field">
                    Position: {details.details.position}
                </div>
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}
