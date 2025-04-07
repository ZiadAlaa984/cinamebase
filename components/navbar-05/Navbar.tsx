import MobileNavbar from "./MobileNavbar";
import { Model } from "../Shared/ModelSearch/Model";
import ButtonsNavbar from "./ButtonsNavbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed z-50 top-6 inset-x-4 h-16 shadow  border dark:bg-black/10 bg-white/100  backdrop-blur-md  max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-6">
            <h1 className="text-2xl font-bold z-50  text-black dark:text-white ">
              <Link href={"/"}>Cinema Base</Link>
            </h1>
            <Model className="hidden lg:block" />
          </div>
          <MobileNavbar />
          <ButtonsNavbar className="hidden lg:flex shrink-0 items-center gap-2 " />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
