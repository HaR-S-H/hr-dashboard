import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 'default' }) => {
  const sizes = {
    default: 'w-4 h-4',
    large: 'w-5 h-5'
  };
  
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizes[size]} ${
            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
    </div>
  );
};

export default StarRating;