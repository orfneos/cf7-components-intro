import OnlineStatus from "../components/OnlineStatus.tsx";
import {useEffect} from "react";

const OnlineStatusPage = () => {

    useEffect(() => {
        document.title = "CF7 Online Status"
    }, []);

    return(
        <>
            <OnlineStatus/>
        </>
    )
};

export default OnlineStatusPage;