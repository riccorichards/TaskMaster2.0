import { useState, useRef, useEffect } from "react";
import "./responsiveLinks.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";


const ResponsiveLinks = ({ scrollToComponents }) => {
	const [isSelector, setIsSelectedValue] = useState(false)

	const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsSelectedValue(false);
    }
  };

	useEffect(() => {
		window.addEventListener("click", handleClickOutside)

		return () => {
			window.removeEventListener("click", handleClickOutside)
		}
	})
	return (
		<div className="ResponsiveLinks_wrapper" ref={ref}>
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
	)
}

export default ResponsiveLinks;