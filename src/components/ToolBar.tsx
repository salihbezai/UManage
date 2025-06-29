import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

const ToolBar = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center  justify-between gap-1 sm:gap-4">
        <div className="">
          {/* <input
            className="text-white border-2
                 border-white px-3 py-1 rounded-[10px]
                  placeholder:text-white"
            placeholder="Search Items..."
          /> */}
          <Select>
            <SelectTrigger
              className="w-[180px] border-2
            border-white text-white"
            >
              <SelectValue placeholder="Permissions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <button
            className="bg-[#D76F24]
     text-white font-bold px-3 py-2
      flex justify-center items-center
       rounded-[10px] cursor-pointer transform transition-transform duration-200
       hover:scale-105 "
          >
            <Plus />
            New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
