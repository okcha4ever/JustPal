import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchByUser = () => {
  return (
    <div className="inline-flex gap-3">
      <Input placeholder="Search by username..." className="w-96" />
      <button className="flex items-center rounded-full border px-2.5 py-2 duration-200 ease-in-out hover:bg-green-500">
        <Search size={15} />
      </button>
    </div>
  );
};

export default SearchByUser;
