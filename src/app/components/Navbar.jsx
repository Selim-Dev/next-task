'use client'

import { useState } from "react";
import { HidingContainer, LeftContainer, NavbarButton, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, OpenMenuButton, RightContainer } from "../styles/Navbar.style"

const Navbar = () => {
	const [extendNavbar,setExtedNavbar] = useState(false);
	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<OpenMenuButton onClick={()=>{setExtedNavbar(cur=>!cur)}}>
						{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
					</OpenMenuButton>
				</LeftContainer>
				<RightContainer >
					<HidingContainer>
							<NavbarButton>Individual Investor</NavbarButton>
							<h1>hello</h1>
					</HidingContainer>
					<h1>Select</h1>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && 
			<NavbarExtendedContainer>
				<h1>hello</h1>
				<h1>hello</h1>
			</NavbarExtendedContainer>}
		</NavbarContainer>
	)
}

export default Navbar