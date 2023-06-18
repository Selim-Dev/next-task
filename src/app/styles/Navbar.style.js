const { styled } = require("styled-components");


export const NavbarContainer = styled.nav`
  max-width: 100vw;
	height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
	transition: all 1s ease-in-out;
	display: flex;
	flex-direction: column;
	margin: 20px 0px 20px 0px;
	box-sizing: border-box;
`
export const LeftContainer = styled.div`
		flex: 60%;
		display: flex;
		align-items: center;

`
export const RightContainer = styled.div`
		flex: 40%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-inline-end: 30px;

`
export const HidingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 768px){
		display: none;
	}
`

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display:flex;
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 1s ease-in-out;
	width: 70%;

	@media screen and (min-width: 768px){
		display: none;
		
	}
`;
export const OpenMenuButton = styled.button`
	width: 70px;
	height: 50px;
	background:none;
	border:none;
	color:black;
	font-size: 45px;
	cursor: pointer;
	color: #004A91;
	transition: all 1s ease-in-out;

	@media screen  and (min-width: 768px){
		display: none;
		
	}
`

export const NavbarButton = styled.button`
	width: 157px;
	height: 38px;
	background:var(--primary-color);
	border:none;
	color:var(--primary-color);
	font-size: 0.8rem;
	cursor: pointer;
	color: #fff;
	transition: all 0.2s ease-in-out;
	&:hover{
		background: #004cc7;
	}
	border-radius: 5px;
	margin:10px;


`
export const LanguageButton = styled.button`
	background-color: #2b2522;
	padding: 3px;
	height: 38px;
	width: 4.6rem;
	display: flex;
	justify-content: space-between;
	border-radius: 5px;
	margin:10px;

`;
export const LanguageElement = styled.button`
	width: 1.8rem;
	height: 100%;
	border: none;
	border-radius: 2px;
	padding: 3px;
	color: #fff;
	background-color:  ${(props) => (props.active ? "#e3b400" : "#2b2522")};  ;
	
`;
export const DropDown = styled.div`
	width: 237px;
	height: 53px;
	border: 2px solid rgba(0,72,145,0.35);
	border-radius: 5px;
	display: flex;
	padding:5px;
	margin:10px;
	justify-content: space-between;

`;

export const UserBadge = styled.div`
	background-color: var(--primary-color);
	width: 32px;
	height: 32px;
	font-weight: 900;
	color: #fff;
	display: grid;
	place-items: center;
	border-radius: 4px;
`;
export const WelcomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Typography = styled.p`
	font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
	color: var(--secondary-color);
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
	
`;

