
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  description: string;
}

export const MetricCard = ({ title, value, change, trend, icon: Icon, description }: MetricCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="flex items-center space-x-2">
          <Badge 
            variant={trend === "up" ? "default" : "destructive"}
            className={`text-xs ${
              trend === "up" 
                ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300" 
                : "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300"
            }`}
          >
            {change}
          </Badge>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
