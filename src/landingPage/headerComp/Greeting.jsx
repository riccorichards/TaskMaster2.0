import moment from "moment";
import { useState, useEffect } from "react";

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
	const existUser = JSON.parse(localStorage.getItem("verified"))
	const username = existUser.firstname;
	return (
		<>
			<h1><span style={{ color: "#243524" }}>{greeting}</span> {username}</h1>
		</>
	)
}

export default Greeting;