import SignIn from "../Sign_in/SignIn"
import SignUp from "../SignUp/SignUp"

const Screen605 = ({ showLogIn }) => {
	return (
		<>
			{showLogIn ? (<SignIn />)
				:
				(<SignUp />)
			}
		</>
	)
}

export default Screen605