import React, { useEffect, useState } from "react";

const handlerUsername = new Event("storage")
const EditProfile = ({ setProfileId, userProfileIMG }) => {
	const [newUserName, setNewUsername] = useState("");
	const [chooseId, setChooseId] = useState(false)
	const [user, setUser] = useState({})
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
		<React.Fragment>
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
								<img src={profile.profile} alt="profile" onClick={() => setProfileId(profile.id)}/> 
						 </div>
						))}
					</div> : null}
			</div>
		</React.Fragment>
	)
}

export default EditProfile;