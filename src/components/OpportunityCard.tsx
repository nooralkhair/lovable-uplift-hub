import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

export interface OpportunityCardProps {
  title: string;
  description: string;
  location?: string;
  deadline?: string;
  type?: string;
  icon?: LucideIcon;
}

const OpportunityCard = ({ 
  title, 
  description, 
  location, 
  deadline, 
  type,
  icon: Icon 
}: OpportunityCardProps) => {
  return (
    <Card className="hover:shadow-hover transition-all duration-300 border-border h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            {type && (
              <Badge variant="secondary" className="mb-2">
                {type}
              </Badge>
            )}
          </div>
          {Icon && (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
          )}
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">Location:</span>
            <span>{location}</span>
          </div>
        )}
        {deadline && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">Deadline:</span>
            <span>{deadline}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;