import './UserList.css'
import User from '../users/User';

function UserList (props) {

    if (props.users.length === 0) {
        return <p style={{ textAlign: "center", marginTop: "25px"}}>No users! Would you like to add?</p>;
      }

    return (
            <ul onClick={() => console.log("open")} className="user-list">
                {
                    props.filtered.map(filteredUser => {
                        return (
                            <User
                                key={filteredUser.id}
                                id={filteredUser.id}
                                firstName={filteredUser.firstName}
                                lastName={filteredUser.lastName}
                                phone={filteredUser.phone}
                                email={filteredUser.email}
                                onRemove={props.onRemoveHandler}
                                onEdit={props.onEditUser}
                            >
                                {filteredUser.firstName + " " + filteredUser.lastName + " "}
                            </User>
                        )
                    })
                }
            </ul>
    )
}

export default UserList;