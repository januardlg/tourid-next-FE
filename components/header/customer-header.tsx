"use client";
import Image from "next/image";
import { IMenuHeader } from "./menu-header";
import Link from "next/link";
import { useAppStore } from "@/providers/app-store-provider";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { IUserData } from "@/features/login/lib/login.valid-schema";

const MENU_HEADER: IMenuHeader[] = [
  {
    title: "Our Tour",
    link: "/our-tour",
  },
  {
    title: "Trip History",
    link: "/trip-history",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Login",
    link: "/login",
  },
];

const CustomerHeader = ({ dataUser }: { dataUser: IUserData | undefined }) => {
  const { username, setUsername } = useAppStore((state) => state);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      const result = await response.json();

      setUsername("");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      globalThis.location.href = "/login";
    }
  };

  return (
    <header className="grid grid-cols-12">
      <div className="col-span-6">
        <Link href={"/home"}>
          <Image
            src={`/icons/tourid-logo.png`}
            alt="Tour Id"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="col-span-6 flex justify-end space-x-8">
        {MENU_HEADER.map((menu) => {
          if (menu.title == "Login") {
            if (dataUser?.username) {
              return (
                <Popover key={"username"} className="relative">
                  <PopoverButton
                    className={
                      "cursor-pointer focus:outline-none data-active:text-red-600 data-focus:outline data-focus:outline-white data-hover:text-red-600"
                    }
                  >
                    {dataUser?.username}
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    anchor="bottom"
                    className={cn(
                      "divide-y divide-white/5 rounded-sm bg-white shadow-md text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0",
                    )}
                  >
                    <div className={cn("p-1 cursor-pointer", "min-w-30")}>
                      <button
                        className={cn(
                          "px-4 py-2 cursor-pointer w-full text-left ",
                          "hover:bg-tid-red-100/10",
                        )}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </PopoverPanel>
                </Popover>
              );
            } else {
              return (
                <Link
                  key={menu.link}
                  href={menu.link}
                  className="hover:text-red-600"
                >
                  {menu.title}
                </Link>
              );
            }
          }
          return (
            <Link
              key={menu.link}
              href={menu.link}
              className="hover:text-red-600"
            >
              {menu.title}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default CustomerHeader;
