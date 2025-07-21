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
import { useBookmarks } from "@/hooks/useBooksMarks";

export default function Page() {
  const { employees, loading, error, fetchEmployees } = useEmployees();
  const {isBookmarked}=useBookmarks();  
  return <>
   <header
      className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        {/* <SearchBar />
        <DropdownMenu data={departments} value={"department"} />
        <DropdownMenu data={ratings} value={"rating"} /> */}
        <div className="m-auto">
          <ModeToggle />
        </div>
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
          : employees.map((employee) => (
  
          isBookmarked(employee.id)?<EmployeeCard key={employee.id} employee={employee} />:null
        ))}
      </div>
    </main>
    <footer className="flex items-center justify-center p-4 border-t"/>
  </>
}
