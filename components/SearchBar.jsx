import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

export function SearchBar() {
  const { setSearchTerm } = useSearch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="flex w-full max-w-md items-center gap-2" onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-9"
          onChange={handleChange}
        />
      </div>
      <Button type="submit" variant="default">
        Search
      </Button>
    </form>
  );
}
