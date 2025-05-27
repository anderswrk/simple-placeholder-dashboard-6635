
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity,
  Bell,
  Settings,
  Search,
  Plus
} from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ChartCard } from "@/components/ChartCard";
import { ActivityFeed } from "@/components/ActivityFeed";
import { TopNav } from "@/components/TopNav";

export const Dashboard = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "from last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      trend: "up", 
      icon: Users,
      description: "from last month"
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19%",
      trend: "up",
      icon: ShoppingCart,
      description: "from last month"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+2.5%",
      trend: "up",
      icon: Activity,
      description: "from last week"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ChartCard />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>

        {/* Additional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Performance Overview
              </CardTitle>
              <CardDescription>
                Key performance indicators for this quarter
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Website Traffic</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Goal Completion</span>
                  <span className="font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Create New Project
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Invite Team Members
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
