import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatar } from "@nextui-org/react";
import { div, h1 } from "framer-motion/client";
import { signOut } from "firebase/auth";
import { auth } from "../utils/utils";
import { useNavigate } from "react-router";


function Profile() {
const navigate = useNavigate()

    const { user, setUser } = useContext(AuthContext)
    console.log('user======>', user);


    const handleLogOut = async () => {
     await   signOut(auth)
    }
    return (

        <>

            <div>
                {
                    user.isLogin ?
                        <div className="flex flex-col justify-center item-center ">
                            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Profile page</h1>

                            <Avatar className="flex justify-content-center " src={user.userInfo.photoUrl} size="lg" />

                            <h1 className="text-1xl  mb-6 text-center  ">{user.userInfo.email}</h1>
                            <h1 className="text-1xl   mb-6 text-center  ">{user.userInfo.name}</h1>

                        </div>
                        : <h1>log out</h1>
                        
                }
                <button
                    onClick={handleLogOut}
                    className="w-1/2 flex justify-center text-black font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >Log Out</button>
            </div>
        </>

    )
}
export default Profile;