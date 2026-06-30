import { Card, CardContent } from "@/components/ui/card";
import {
  Coins,
  Trophy,
  Backpack,
  Flame,
} from "lucide-react";

export function StatsCard() {
  return (
    <Card className="mt-6 bg-zinc-900 border-zinc-800">
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 divide-x divide-zinc-800">

        <div className="flex items-center gap-3">
          <Coins className="h-8 w-8 text-[#7050F0]" />
          <div>
            <p className="text-sm text-zinc-400">Credits</p>
            <h2 className="text-2xl font-bold">12,500</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Trophy className="h-8 w-8 text-[#7050F0]" />
          <div>
            <p className="text-sm text-zinc-400">Level</p>
            <h2 className="text-2xl font-bold">8</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Backpack className="h-8 w-8 text-[#7050F0]" />
          <div>
            <p className="text-sm text-zinc-400">Inventory</p>
            <h2 className="text-2xl font-bold">15 Items</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Flame className="h-8 w-8 text-[#7050F0]" />
          <div>
            <p className="text-sm text-zinc-400">Daily Streak</p>
            <h2 className="text-2xl font-bold">7 Days</h2>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}