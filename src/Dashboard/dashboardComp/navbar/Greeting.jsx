import moment from "moment";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

const GreetingStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	align-items: center;

	h1 {
		color: #191e29;
    text-shadow: 0 0 1.5px white;
		font-family: 'M PLUS 1 Code', sans-serif;
	}

	span {
		color: #01c380;
		font-family: 'M PLUS 1 Code', sans-serif;
		font-size: 24px;
	}
	`;
const Greeting = () => {
	const [greeting, setgreeting] = useState("")

	useEffect(() => {
		let interval = setInterval(() => {
			const currentTime = moment().hour()

			if (currentTime >= 6 && currentTime < 12) {
				setgreeting("Good Morning")
			} else if (currentTime >= 12 && currentTime < 18) {
				setgreeting("Good Afternoon")
			} else if (currentTime >= 18 && currentTime < 24) {
				setgreeting("Good Evening")
			} else if (currentTime >= 0 && currentTime < 6) {
				setgreeting("Good Midnight")
			}
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [greeting])
	const existUser = JSON.parse(localStorage.getItem("user"))
	const username = existUser.username;



	return (
		<GreetingStyle>
			<h1>{username}</h1>
			<span>{greeting}</span>
		</GreetingStyle>
	)
}

export default Greeting;