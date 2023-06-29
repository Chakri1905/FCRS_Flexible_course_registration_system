import React from 'react';

import {
Nav,
NavLink,
Bars,
NavMenu,
// NavBtn,
// NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
    
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/student' activeStyle>
			Student
		</NavLink>
		<NavLink to='/registered' activeStyle>
			Course Registration
		</NavLink>
        <NavLink to='/slotregister' activeStyle>
			Course Availability
		</NavLink>
		<NavLink to='/teacher' activeStyle>
        Faculty
		</NavLink>
		<NavLink to='/facultycourses' activeStyle>
			Facultycourses
		</NavLink>
		<NavLink to='/facultyrating' activeStyle>
			Faculty Rating
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			SignUp/SignIn
		</NavLink>

		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
