import { Button } from "../ui/button";
import ThemeToggleButton from "./ThemeToggleButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DATA } from "@/constant";
export default function ButtonsNavbar({
  className,
  toggleMenu,
}: {
  className?: string;
  toggleMenu?: () => void;
}) {
  interface NavbarLink {
    label: string;
    value: string;
    icon?: React.ReactNode;
    variant?: string;
  }
  return (
    <div className={cn("flex items-start justify-between gap-2", className)}>
      <div className="flex items-center  flex-wrap gap-2">
        {DATA.Navbar.map((li: NavbarLink, index) => (
          <Button
            onClick={toggleMenu}
            key={index}
            variant={index == 2 ? "outline" : "default"}
            className=" rounded-full"
          >
            <Link
              href={`/${li.value}`}
              className=" flex text-[15px] text-black dark:text-white  items-center gap-2"
            >
              {li.label}
              {li.icon}
            </Link>
          </Button>
        ))}
      </div>
      <ThemeToggleButton />
    </div>
  );
}
