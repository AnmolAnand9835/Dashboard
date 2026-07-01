import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "./ui/Button";

export function Hero(props) {
  return (
    <Card
      className="hover:border-[#7050F0] transition cursor-pointer bg-zinc-900 border-zinc-800 hover:transition: 0.2s;
transform: translateY(-4px);"
    >
      <CardContent className="p-4 flex flex-col items-center gap-3">
        <div className="text-5xl">{props.emoji}</div>

        <div className="text-center">
          <h3 className="font-semibold">{props.item}</h3>

          <p className="text-sm text-zinc-400">{props.price}</p>
        </div>

        <Button className="bg-violet-500 text-white hover:bg-violet-400 pr-5 pl-5">
          Buy
        </Button>
      </CardContent>
    </Card>
  );
}
