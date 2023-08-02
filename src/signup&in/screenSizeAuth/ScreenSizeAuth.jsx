import "./screenSizeAuth.css";
import Logo from './../../landingPage/headerComp/logo/Logo';
import SignIn from "../Sign_in/SignIn";
import SignUp from "../SignUp/SignUp";
import { useState } from "react";
import Screen605 from "./Screen605";
const ScreenSizeAuth = ({ showLogIn }) => {

	const [screen605, setScreen605] = useState(window.innerWidth)

	window.addEventListener("resize", () => {
		setScreen605(window.innerWidth)
	})

	return (
		<div className="screenSizeOfAuth_wrapper">
			{screen605 > 605 ?
				<div className="screenSizeOfAuth">
					<div className="headerOfAuth">
						<Logo />
						<h1>Unlock Limitless Possibilities</h1>
					</div>
					<div className="bodyOfAuth">
						{showLogIn ? (<SignIn />)
							: (<SignUp />)
						}
					</div>
				</div>
				:
				<Screen605 showLogIn={showLogIn} />
			}
		</div>
	)
}

export default ScreenSizeAuth;