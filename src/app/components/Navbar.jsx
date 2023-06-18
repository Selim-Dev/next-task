'use client'

import { useState } from "react";
import { DropDown, HidingContainer, LanguageButton, LanguageElement, LeftContainer, NavbarButton, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, OpenMenuButton, RightContainer, Typography, UserBadge, WelcomeContainer } from "../styles/Navbar.style"
import {BiBell, BiMoon} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs'

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
							<BiMoon style={{fontSize:"32px",transform	:'rotate(270deg)',color:'#64646C'}} />
							<BiBell style={{fontSize:"32px",color:'#64646C'}} />
							<LanguageButton>
								<LanguageElement>EN</LanguageElement>
								<LanguageElement active>ع</LanguageElement>
							</LanguageButton>

					</HidingContainer>
							<DropDown >
								<UserBadge>BA</UserBadge>
								<WelcomeContainer >
									<Typography fontSize={'0.8rem'}>Welcome!</Typography>
									<Typography fontWeight={'500'} fontSize={'1.2rem'}>Bader Alobaidi</Typography>
								</WelcomeContainer>
								<BsChevronDown style={{fontSize:"28px",color:'#64646C'}} />
							</DropDown>
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