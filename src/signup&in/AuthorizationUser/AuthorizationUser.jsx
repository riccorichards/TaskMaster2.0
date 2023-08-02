import "./AuthorizationUser.css";
import bg_for_sign from "../../assets/bg_for_sign.png";
import Logo from '../../landingPage/headerComp/logo/Logo';
import { useLocation } from "react-router-dom";
import SignIn from "../Sign_in/SignIn";
import SignUp from "../SignUp/SignUp";
import { useState } from "react";
import ScreenSizeAuth from "../screenSizeAuth/ScreenSizeAuth";

const AuthorizationUser = () => {

	const [screenSize, setScreenSize] = useState(window.innerWidth)

	window.addEventListener("resize", () => {
		setScreenSize(window.innerWidth)
	})


	const location = useLocation()
	const showLogIn = location.pathname === "/auth/signin";
	return (
		<>
			{
				screenSize > 1265 ?
					(<div className="sign_up_form_wrapper">
						<div className="media_area_sign">
							<img src={bg_for_sign} alt="background sign" />
							<div className="Logo_sign">
								<Logo />
							</div>
							<h1>Unlock Limitless Possibilities</h1>
						</div>
						<div className="sign_form_wrapper">
							{showLogIn ? (<SignIn />)
								: (<SignUp />)
							}
						</div>
					</div>) : <ScreenSizeAuth showLogIn={showLogIn} />}
		</>
	)
}

export default AuthorizationUser;