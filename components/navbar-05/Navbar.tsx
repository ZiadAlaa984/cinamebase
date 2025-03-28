import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Search } from "lucide-react";
import ThemeToggleButton from "./ThemeToggleButton";
import Link from "next/link";
import { Model } from "../Shared/ModelSearch/Model";
import { MdMovie } from "react-icons/md";
import { RiMovie2AiFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed z-50 top-6 inset-x-4 h-16 backdrop-blur-md border max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-6">
            <Logo className="shrink-0" />
            <Model />
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              className="bg-muted text-foreground hover:bg-accent shadow-none rounded-full md:hidden"
            >
              <Search className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              <Link
                href="/movies"
                className=" flex text-[15px] items-center gap-2"
              >
                Movies
                <MdMovie className="size-4" />
              </Link>
            </Button>
            <Button className="rounded-full cursor-pointer">
              <Link
                href="/series"
                className=" flex text-[15px] items-center gap-2"
              >
                Series
                <RiMovie2AiFill className="size-4" />
              </Link>
            </Button>
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
