import { useLocation } from "react-router-dom";
import { useLayoutEffect, useEffect } from "react";

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

export default ScrollToTop;