import {useEffect} from "react";
import {useParams} from "react-router";

const UserPage = () => {
    const {userId} = useParams();

    useEffect(() => {
        document.title = `CF7 User Id: ${userId} `;
    }, [userId]);

    return(
        <>
            <h1>User with Id: {userId}</h1>
        </>
    )
}

export default UserPage;