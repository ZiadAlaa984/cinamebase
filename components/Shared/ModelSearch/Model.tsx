"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DATA } from "@/constant";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Search } from "@/components/navbar-05/nav-menu";
import { cn } from "@/lib/utils";

export function Model({ className }: { className?: string }) {
  // Controls the type of search (movie, tv, etc.)
  const [kind, setKind] = useState("movie");

  // State to control AlertDialog
  const [modelOpen, setModelOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside both the search container and dialog content
      if (
        searchContainerRef.current &&
        dialogContentRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        !dialogContentRef.current.contains(event.target as Node)
      ) {
        setModelOpen(false);
      }
    };

    // Only add listener when modal is open
    if (modelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modelOpen]);

  return (
    <div ref={searchContainerRef}>
      <AlertDialog open={modelOpen} onOpenChange={(open) => setModelOpen(open)}>
        {/* Trigger button */}
        <AlertDialogTrigger className={cn(className, "")} asChild>
          <Button
            className="relative shadow-xl rounded-full px-2"
            variant="outline"
          >
            <Input
              onClick={() => setModelOpen(true)}
              disabled
              type="text"
              className="border-0  dark:bg-transparent py-4 dark:placeholder:text-white  placeholder:absolute placeholder:top-2 placeholder:left-2 placeholder:-translate-y-1/2 rounded-full"
              placeholder={`Search`}
            />
            <SearchIcon className="absolute top-1/2 dark:text-white  right-2 -translate-y-1/2" />
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent ref={dialogContentRef}>
          <AlertDialogHeader>
            <ul className="flex w-full border-b">
              {DATA.search.map((search, index) => (
                <li
                  key={index}
                  onClick={() => setKind(search.value)}
                  className={`${
                    kind === search.value ? "border-b-2 border-primary" : ""
                  } flex gap-2 text-base cursor-pointer items-center
                    justify-center p-4 rounded-t-lg activegroup`}
                >
                  {search.icon}
                  {search.label}
                </li>
              ))}
            </ul>
            <AlertDialogDescription>
              <Search kind={kind} setModel={setModelOpen} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
