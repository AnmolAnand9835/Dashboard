import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function Hero() {
  return (
<Card className="hover:border-[#7050F0] transition cursor-pointer bg-zinc-900 border-zinc-800">

  <CardContent className="p-4 flex flex-col items-center gap-3">

    <div className="text-5xl">
      🗡️
    </div>

    <div className="text-center">
      <h3 className="font-semibold">
        Iron Sword
      </h3>

      <p className="text-sm text-zinc-400">
        Epic
      </p>
    </div>

  </CardContent>

</Card>
  );
}