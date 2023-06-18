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
		padding-inline-end: 30px;
		background-color: aliceblue;
`
export const HidingContainer = styled.div`
	display: flex;
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
	background: #004A91;
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

`

