import React, { useEffect, useState } from "react";

const handlerUsername = new Event("storage")
const handlerProfileIMG = new Event("storage")
const EditProfile = () => {
	const [newUserName, setNewUsername] = useState("");
	const [file, setFile] = useState({})
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

	const handlerFile = (e) => {
		setFile(e.target.files[0])
	}
	const [data, setData] = useState([])
	const handlerUpload = async () => {
		if (file) {
			const formData = new FormData();
			formData.append("file", file);
			try {
				const response = await fetch("url", { method: "post", body: formData });
				const data = await response.json();
				setData(data)
			} catch (err) {
				console.log(err.message);
			}
		}
	};
 console.log(data)
	useEffect(() => {
		if (file) {
			localStorage.setItem("profileIMG", file.name)
			window.dispatchEvent(handlerProfileIMG)
		}
	}, [file])

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
				<input
					type="file"
					name="file"
					onChange={handlerFile}
				/>
				<button
					onClick={() => handlerUpload()}
				>Upload</button>
			</div>
		</React.Fragment>
	)
}

export default EditProfile;