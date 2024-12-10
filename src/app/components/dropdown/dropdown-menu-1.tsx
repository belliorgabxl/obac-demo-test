import React, { useState } from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { DropMenuProps } from "@/resource/home/navbarData";

export default function DropMenu({
  menuData = [],
}: {
  menuData: DropMenuProps[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-white flex">
        {menuData.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="hover:bg-blue-900 p-1 px-4 h-full rounded-xl duration-300 text-md">
              {menu.menuTopic}
              <NavigationMenuContent className="top-full mt-4 bg-zinc-700 rounded-xl">
                <ul className="gap-2 py-1 px-2 text-white  ">
                  {menu.menuList.map((item, index) => (
                    <ListItem
                      href={item.href}
                      key={index}
                      title={item.menuName}
                      children={item.menuIcon}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>

          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        asChild
        className="flex gap-0 my-1 justify-between items-center"
      >
        <a
          ref={ref}
          className={cn(
            "block select-none  rounded-md px-5 py-2 leading-none no-underline outline-none transition-colors group hover:bg-zinc-500 duration-500  focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="w-8 h-8 text-white mr-4">{children}</div>
          <div className="text-sm font-medium mt-0.5 leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
