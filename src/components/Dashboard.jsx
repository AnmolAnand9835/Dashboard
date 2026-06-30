import { Button } from "./ui/Button";
import { StatsCard } from "./StartCard";
import { Level } from "./Level";
import { Hero } from "./Hero";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Dashboard() {
  return (
        <div className="w-full text-center">
          <Level />
          <StatsCard />
          <Card className="flex flex-col justify-between gap-6 p-2 mt-6">
            <CardHeader>
              <CardTitle className="text-3xl md:text-3xl">Inventory</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-6 text text-white">
              <Hero />
            </CardContent>
          </Card>
        </div>
  );
}
