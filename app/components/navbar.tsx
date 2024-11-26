import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/Logo.svg";
import UserProfile from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";

const Navbar = () => {
   return (
      <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">
         <div>
            <Image src={Logo} alt="logo" width={0} height={0} sizes="100" />
         </div>
         <div className="flex gap-x-5">
            <div>
               <Image src={UserProfile} alt="User Profile" />
            </div>
            <Image src={Menu} alt="User Profile" />
         </div>
      </nav>
   );
};

export default Navbar;
