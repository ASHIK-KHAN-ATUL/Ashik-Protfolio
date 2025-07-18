import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useAdmin = () => {

    const {user, loading} = useContext(AuthContext);


};

export default useAdmin;