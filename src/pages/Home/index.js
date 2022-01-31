import { forwardRef } from "react";
import "./style.css"
const Home = forwardRef((props, ref) => {
	return (
		<div className="home" ref={ref}>
			<div className="home__baner">
				<div className="home__message">
					<span>Let's type</span>
					<span>and design our</span>
					<span>messages!</span>
				</div>
			</div>
		</div>
	);
})

export default Home;
