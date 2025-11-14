import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < fullStars
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1">
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
          {movie.title}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{movie.year}</span>
          <span className="text-sm font-semibold text-accent">
            {movie.rating}/10
          </span>
        </div>
        
        <div className="flex gap-0.5">
          {renderStars(movie.rating)}
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
