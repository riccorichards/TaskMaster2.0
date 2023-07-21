import "./Responsive768.css";
import { useState, useEffect, useRef } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { userProfileIMG } from "../../../../DataSection/profileSwitcher";
import Greeting from './../Greeting';

const handlerUsername = new Event("storage")
const Responsive768 = ({ chosenProfile, profileId, scrollToComponents, setIsInstuction, setProfileId }) => {
	const [isSelector, setIsSelectedValue] = useState(false)
	const [showProfile, setShowProfile] = useState(false);
	const [isEdit, setIsEdit] = useState(false)
	const navigate = useNavigate()
	const logOut = () => {
		navigate("/")
	}

	const [newUserName, setNewUsername] = useState("");
	const [chooseId, setChooseId] = useState(false)
	const [user, setUser] = useState({})
	const refMenu = useRef(null)



	const handleClickOutside = (e) => {
		if (refMenu.current && !refMenu.current.contains(e.target)) {
			setIsSelectedValue(false)
		}
	}

	useEffect(() => {
		window.addEventListener("click", handleClickOutside)

		return () => {
			window.removeEventListener("click", handleClickOutside)
		}
	})
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		if (user) {
			setUser(user)
		}
	}, [])
	const handlerNewUserName = e => {
		setNewUsername(e.target.value)
	}
	const changeProfileImg = () => {
		if (newUserName) {
			user.username = newUserName
			localStorage.setItem("user", JSON.stringify(user))
			window.dispatchEvent(handlerUsername)
		}
		setNewUsername("")
	}
	return (
		<div className="responsive_768">
			<div className="ResponsiveLinks_wrapper" ref={refMenu}>
				<button onClick={() => setIsSelectedValue(prev => !prev)}
				>

					{!isSelector ? "Show Menu" : "Hide Menu"}
					{!isSelector ? <AiFillCaretDown /> : <AiFillCaretUp />}
				</button>
				{isSelector ?
					<div className="selectLinks">
						<div className="selectLinks_item" onClick={() => scrollToComponents("overview")} >Overview</div>
						<div className="selectLinks_item" onClick={() => scrollToComponents("task")}>Task Generator</div>
						<div className="selectLinks_item" onClick={() => scrollToComponents("timer")}>Timer</div>
						<div className="selectLinks_item" onClick={() => scrollToComponents("map")}>Road map</div>
					</div>
					: null}
			</div>

			<img src={chosenProfile(profileId)} alt="profile" onClick={() => setShowProfile(prev => !prev)} />
			{showProfile ?
				<div className="profileMaker768">
					<Greeting />
					<div className="profileMaker768_line" />
					<button onClick={() => setIsEdit(prev => !prev)}>Edit Profile</button>
					<button onClick={() => setIsInstuction(prev => !prev)}>Instruction</button>
					<button onClick={() => logOut()}>Log Out</button>
				</div>
				: null}
			{isEdit ?
				<div className="editProfile_wrapper">
					<div className="profileEditor">
						<h3>Edit Username</h3>
						<input type="text"
							placeholder="New username"
							value={newUserName}
							onChange={handlerNewUserName}
						/>
						<button onClick={() => changeProfileImg()}>Edit</button>
					</div>
					<div className="uploadFile">
						<button onClick={() => setChooseId(prev => !prev)}>Choose your Type</button>
						{chooseId ?
							<div className="profileIMGs_wrapper">
								{userProfileIMG.map(profile => (
									<div className="profileIMGs" key={profile.id}>
										<img src={profile.profile} alt="profile" onClick={() => setProfileId(profile.id)} />
									</div>
								))}
							</div> : null}
					</div>
				</div>
				:
				null}
		</div>
	)
}

export default Responsive768;