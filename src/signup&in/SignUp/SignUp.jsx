import "./signup.css";
import fb from "../../assets/fb.png";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useRef, useEffect } from "react";
import UserContext from './../../userContext';
const SignUp = () => {
	const navigate = useNavigate()
	const getUser = useContext(UserContext)
	const setUser = getUser.setUser
	const user = getUser.user
	const { reset, watch, register, formState: { errors }, handleSubmit } = useForm({
		mode: "onBlur"
	})
	const onSubmit = data => {
		const userItem = JSON.stringify(data)
		localStorage.setItem("user", userItem)
		const existUser = JSON.stringify(data)
		localStorage.setItem("existUser", existUser)
		setUser(userItem)
		reset()
	}
	const password = useRef();
	password.current = watch("password", "")
	useEffect(() => {
		if (user) {
			navigate("/dashboard")
		}
	}, [user, navigate])
	return (
		<div className="sign_up_form">
			<h1>Create an account</h1>
			<div className="login_with_social">
				<button className="google">
					<img src={google} alt="google icon" />
					Sign up with google</button>
				<button className="facebook">
					<img src={fb} alt="facebook icon" />
					Sign up with facebook</button>
			</div>

			<span>or</span>

			<form id="form_wrapper" onSubmit={handleSubmit(onSubmit)}>
				<div className="signUp_username_wrapper">
					<input type="text" placeholder="Username" {...register("username", {
						required: "This field is required!"
					})} />
					<span>{errors?.username && <span className="error_signUp_username">{errors.username.message}</span>}</span>
				</div>
				<div className="signUp_email_wrapper">
					<input type="email" placeholder="Email" {...register("email", {
						required: "This field is required!",
						pattern: {
							value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
							message: "This email is not valid!"
						}
					})} />
					<span>{errors?.email && <span className="error_signUp_email">{errors.email.message}</span>}</span>
				</div>
				<div className="signUp_password_wrapper">
					<input type="password" placeholder="Password" {...register("password", {
						required: "This field is required!",
						minLength: {
							value: 8,
							message: "Minimum 8 Characters Required!",
						}
					})} />
					<span>{errors?.password && <span className="error_signUp_password">{errors.password.message}</span>}</span>
				</div>
				<div className="signUp_confirm_wrapper">
					<input type="password" placeholder="Confirm password" {...register("confirm", {
						required: "This field is required!",
						validate: value => value === password.current || "The passwords do not match"
					})} />
					<span>{errors?.confirm && <span className="error_confirm">{errors.confirm.message}</span>}</span>
				</div>
				<button type="submit" className="form_BTN">Create an account</button>
			</form>

			<div className="cheking_account">Already have an account? <Link to="signin">Log in</Link></div>
		</div>
	)
}

export default SignUp;