import { Button } from "./ui/Button";
import { StatsCard } from "./StartCard";
import { Level } from "./Level";
import { Hero } from "./Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Profile } from "./Profile";

export function Inventory() {
  return (
    <div className="w-full text-center">
      <Card>
        <CardHeader className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 p-4 md:p-8 lg:p-10">
            <div>
            <CardTitle className="text-3xl md:text-5xl">
              Inventory
            </CardTitle>

            <CardDescription>
              Manage all your collected items.
            </CardDescription>
            </div>

          <Profile className="w-min hidden md:flex h-24 w-24" />
        </CardHeader>
      </Card>
    </div>
  );
}
