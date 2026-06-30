import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function Thing() {
  return (
    <Card>
      <CardContent>
        <div className="flex justify-around h-20 items-end">
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
