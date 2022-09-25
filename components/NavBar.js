import React from "react";
import {
  OfficeBuildingIcon,
  LogoutIcon,
  CogIcon,
  MailIcon,
  NewspaperIcon,
  BeakerIcon,
  CurrencyDollarIcon,
  UserIcon,
  MenuAlt1Icon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Button from "./Button";

function NavBar(props) {
  return (
    <nav className="flex justify-between items-center h-20 bg-black">
      <div className="ml-10">
        <NavBarBrand color="white">
          <Link href="/">XReview</Link>
        </NavBarBrand>
      </div>
      <div className="flex items-center mr-20"><Link href="/signup"><div className="text-white m-5">Sign Up</div></Link><Link href="/login"><div className="text-white m-5">Log in</div></Link><Link href="/create-room"><div className="text-white m-5">Create Room</div></Link><Link href="/join"><div className="text-white m-5">Join a game</div></Link></div>
    </nav>
  );
}

function NavBarBrand(props) {
  const classes = `
  text-2xl text-${props.color ? props.color : "black"} text-bold mr-10
  `;
  return <div className={classes}>{props.children}</div>;
}

export default NavBar;