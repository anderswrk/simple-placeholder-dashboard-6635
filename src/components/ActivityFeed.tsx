
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "completed project",
    target: "Website Redesign",
    time: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    type: "success"
  },
  {
    id: 2,
    user: "Mike Chen",
    action: "created new",
    target: "Marketing Campaign",
    time: "4 hours ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    type: "info"
  },
  {
    id: 3,
    user: "Emily Davis",
    action: "updated",
    target: "User Dashboard",
    time: "6 hours ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    type: "warning"
  },
  {
    id: 4,
    user: "Alex Rodriguez",
    action: "commented on",
    target: "Bug Report #123",
    time: "8 hours ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    type: "info"
  }
];

export const ActivityFeed = () => {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "success":
        return "default";
      case "warning":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest updates from your team
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id}>
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback>
                    {activity.user.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <Badge variant={getBadgeVariant(activity.type)} className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {activity.action} <span className="font-medium">{activity.target}</span>
                  </p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
              {index < activities.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
