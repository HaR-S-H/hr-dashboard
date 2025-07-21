import { useBookmarks } from "@/hooks/useBooksMarks";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { Card } from "./ui/card";
import { Badge } from "lucide-react";
import StarRating from "./StarRating";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import { Bookmark } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
const EmployeeCard = ({ employee }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const { dispatch } = useContext(AppContext);
const router = useRouter();
  const handlePromote = () => {
    dispatch({ type: 'PROMOTE_EMPLOYEE', payload: employee.id });
  };
  
  const handleView = () => {
    dispatch({ type: 'SET_CURRENT_EMPLOYEE', payload: employee });
    router.push(`/employee/${employee.id}`);
  };
  
  const bookmarked = isBookmarked(employee.id);
  
  return (
    <Card className="hover:shadow-md transition-shadow pl-3 pr-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={employee.image}
            alt={`${employee.firstName} ${employee.lastName}`}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{employee.firstName} {employee.lastName}</h3>
            <p className="truncate max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
  {employee.email}
</p>
            <p className="text-gray-500 text-xs">Age: {employee.age} • {employee.department}</p>
          </div>
        </div>
        {/* <Badge variant={employee.rating >= 4 ? 'success' : employee.rating >= 3 ? 'warning' : 'destructive'}>
          {employee.department}
        </Badge> */}
      </div>
      
      <div className="mt-4">
        <StarRating rating={employee.rating} />
      </div>
      
      <div className="mt-4 flex gap-2 flex-wrap justify-center">
        <Button size="sm" onClick={handleView}>
          <Eye className="w-4 h-4 mr-1" />
          {/* View */}
        </Button>
        <Button
          size="sm"
          variant={bookmarked ? 'destructive' : 'outline'}
          onClick={() => bookmarked ? removeBookmark(employee.id) : addBookmark(employee.id)}
        >
          <Bookmark className={`w-4 h-4 mr-1 ${bookmarked ? 'fill-current' : ''}`} />
          {/* {bookmarked ? 'Unbookmark' : 'Bookmark'} */}
              </Button>
        <Button size="sm" variant="outline" onClick={handlePromote}>
          <TrendingUp className="w-4 h-4 mr-1" />
          {/* Promote */}
        </Button>
      </div>
    </Card>
  );
};
export default EmployeeCard;