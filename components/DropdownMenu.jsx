import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSearch } from "@/hooks/useSearch"

export function DropdownMenu({ data, value }) {
  const { setFilters, filters } = useSearch();

    const handleChange = (selectedValue) => {
        
   if(value === "department") {
      setFilters({ ...filters, department: [selectedValue] });
    }else if(value === "rating") {
      setFilters({ ...filters, rating: [parseFloat(selectedValue)] });
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={`Select a ${value}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.length > 0 ? (
            data.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="No Data">No Data Available</SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
