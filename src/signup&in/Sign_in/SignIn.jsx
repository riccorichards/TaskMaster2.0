import "./SignIn.css";
import fb from "../../assets/fb.png";
import google from "../../assets/google.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const SignIn = () => {
	const [inputValue, setInputValue] = useState({
		email: "",
		password: ""
	})

	const handlerInput = e => {
		const { name, value } = e.target
		setInputValue(prev => ({ ...prev, [name]: value }))
	}
	const user = JSON.parse(localStorage.getItem("user"))
	const navigate = useNavigate()
	const check_email = user.email === inputValue.email
	const check_password = user.password === inputValue.password

	const checkUser = () => {
		if (check_email && check_password) {
			navigate("/dashboard")
		} else {
			alert("Invalid Email or Password")
		}
	}

	return (
		<div className="sign_in_wrapper">
			<div className="sign_in">
				<h1>Walcome back!</h1>
				<div className="login_with_social">
					<button className="google">
						<img src={google} alt="google" />
						Sign in with google</button>
					<button className="facebook">
						<img src={fb} alt="facebook" />
						Sign in with facebook</button>
				</div>

				<span>or</span>

				<div id="signIn_form">
					<div className="signIn_email_wrapper">
						<MdEmail />
						<input type="email"
							placeholder="Email"
							onChange={handlerInput}
							name="email"
							value={inputValue.email}
						/>
					</div>
					<div className="signIn_password_wrapper">
						<RiLockPasswordFill />
						<input type="password"
							placeholder="Password"
							value={inputValue.password}
							name="password"
							onChange={handlerInput}
						/>
						<Link to="/auth" className="forgot_password">Forgot a password?</Link>
					</div>
					<button onClick={() => checkUser()}>Start</button>
				</div>
			</div>
		</div>
	)
}

export default SignIn;