"use client";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { SearchBar } from "@/components/SearchBar";
import { DropdownMenu } from "@/components/DropdownMenu";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import EmployeeCard from "@/components/EmployeeCard";
import { useEmployees } from "@/hooks/useEmployees";
import { useEffect, useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/theme-toggle";
export default function Home() {
  const { employees, loading, error, fetchEmployees } = useEmployees();
    const { searchTerm, filters } = useSearch();
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Design'];
  const ratings = ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'];
        const [filteredEmployees, setFilteredEmployees] = useState([]);
useEffect(() => {
  fetchEmployees();
}, []);

useEffect(() => {
  if (employees.length > 0) {
    setFilteredEmployees(employees);
  }
}, [employees]);

   useEffect(() => {
    const filtered = employees.filter(employee => {
      const matchesSearch =
        searchTerm === '' ||
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment =
        filters.department.length === 0 ||
        filters.department.includes(employee.department);
      console.log(filters.rating);
      
      const matchesRating =
      filters.rating!==undefined &&  filters.rating?.length === 0 ||
        employee.rating >= filters.rating[0]; // assuming rating is number

      return matchesSearch && matchesDepartment && matchesRating;
    });

    setFilteredEmployees(filtered);
  }, [searchTerm, filters, employees]);
  
  return <>
   <header
      className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <SearchBar />
        <DropdownMenu data={departments} value={"department"} />
        <DropdownMenu data={ratings} value={"rating"} />
        <ModeToggle/>
        <div className="ml-auto flex items-center gap-2">
        </div>
      </div>
    </header>
    <main className="flex-1 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {loading?
      Array.from({ length: 20 }).map((_, index) => (
          <Skeleton key={index} className="h-48 w-full rounded-lg" />
        ))
:filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </main>
    <footer className="flex items-center justify-center p-4 border-t"/>
  </>
}
