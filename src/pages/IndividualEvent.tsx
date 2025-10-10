import { useParams, Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, ArrowLeft } from "lucide-react";
import { events } from "./NewsEvents";

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Event not found</h2>
        <Link to="/news-events" className="text-primary hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-10">
        
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/news-events" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={16} /> Back to Events
        </Link>

        <div className="rounded-2xl overflow-hidden shadow-card border border-border bg-card">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[400px] object-contain bg-muted"
          />

          <div className="p-8 space-y-4">
            <h1 className="text-3xl font-bold">{event.title}</h1>

            <div className="text-muted-foreground space-y-1">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{event.time}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span>{event.location}</span>
              </div>
            </div>

            <div
              className="text-base text-foreground leading-relaxed pt-4 border-t border-border"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
