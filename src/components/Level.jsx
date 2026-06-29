import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function Level() {
  return (
    <Card className="rounded-none">
      <CardHeader>
        <CardTitle className="text-3xl">Welcome back, sudo_why 👋</CardTitle>

        <CardDescription>
          Your adventure continues. Explore the world and earn more credits.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-30 justify-center ">
          <div>
            <p className="text-sm text-muted-foreground">Credits</p>
            <h2 className="text-2xl font-bold">12,500</h2>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Level</p>
            <h2 className="text-2xl font-bold">8</h2>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Inventory</p>
            <h2 className="text-2xl font-bold">15 Items</h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
