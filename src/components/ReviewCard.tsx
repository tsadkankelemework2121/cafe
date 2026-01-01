import { Star } from 'lucide-react';
import { Review } from '../data/mockData';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const initials = review.author
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-gradient-to-br from-[#F5E6D3] to-[#EDD9C0] rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-[#8B6F47] to-[#6B5740] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-semibold flex-shrink-0 shadow-md">
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-2">
            <h4 className="font-bold text-[#3D2817] text-base md:text-lg">
              {review.author}
            </h4>
            <span className="text-xs md:text-sm text-[#6B4E3D] whitespace-nowrap">
              {formatDate(review.date)}
            </span>
          </div>

          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 md:w-5 md:h-5 ${
                  i < review.rating
                    ? 'fill-amber-500 text-amber-500'
                    : 'text-[#D4C4B0]'
                }`}
              />
            ))}
          </div>

          <p className="text-[#4A3426] text-sm md:text-base leading-relaxed">
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
}
