"use client"
import React from 'react'
import { Button } from './ui/button';
import { UploadIcon } from 'lucide-react';
import { MenuDropdown } from './smart-dropdown';

const MenuDropdownDemo = () => {
   return (
    <div className="flex justify-center p-4">
      <MenuDropdown
        triggerElement={
          <Button variant="outline">
            <UploadIcon className="mr-2" />
            Upload Files
          </Button>
        }
        menuItems={[
          {
            label: "Custom Action",
            action: () => console.log("Custom action triggered"),
            icon: <span>✨</span>,
            className: "text-purple-600 hover:bg-purple-50"
          }
        ]}
      />
    </div>
  );
}

export default MenuDropdownDemo