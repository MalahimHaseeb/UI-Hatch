"use client"
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface MenuItem {
  label: string
  action: () => void
  icon?: React.ReactNode
  className?: string
}

interface MenuDropdownProps {
  triggerElement: React.ReactElement<{
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    [key: string]: any;
  }>;
  menuItems?: MenuItem[];
  includeDeviceUpload?: boolean;
  fileInputId?: string;
  className?: string;
  align?: "start" | "center" | "end";
}

const MenuDropdown = React.forwardRef<HTMLDivElement, MenuDropdownProps>(
  (
    {
      triggerElement,
      menuItems = [],
      includeDeviceUpload = true,
      fileInputId = "fileInput",
      className,
      align = "end",
      ...props
    },
    ref
  ) => {
    const defaultItems: MenuItem[] = [
      includeDeviceUpload && {
        label: "Upload from device",
        action: () => document.getElementById(fileInputId)?.click(),
      },
    ].filter(Boolean) as MenuItem[];

    const allMenuItems = [...defaultItems, ...menuItems];

    const trigger = React.cloneElement(triggerElement, {
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        triggerElement.props.onClick?.(e);
      },
      className: cn(
        "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        triggerElement.props.className
      ),
    });

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {trigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={align}
          className={cn("min-w-[200px] bg-background", className)}
          {...props}
          ref={ref}
        >
          {allMenuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                item.action();
              }}
              className={cn(
                "cursor-pointer focus:bg-accent focus:text-accent-foreground",
                item.className
              )}
            >
              {item.icon && (
                <span className="mr-2 h-4 w-4">{item.icon}</span>
              )}
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

MenuDropdown.displayName = "MenuDropdown";

export { MenuDropdown };