import { Button } from "./ui/Button";
import { StatsCard } from "./StartCard";
import { Level } from "./Level";
import { Hero } from "./Hero";
import { Backpack, ShoppingBag } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Profile } from "./Profile";
import { useEffect, useState } from "react";
import axios from "axios";

export function Shop() {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    axios
      .get("/api/shop")
      .then((response) => {
        setShop(Object.values(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full text-center">
      <Card>
        <CardHeader className="flex flex-col md:flex-row justify-between items-center gap-6 p-4 md:p-8 lg:p-10">
          <div>
            <div className="flex">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-10 w-10 text-[#7050F0]" />
              </div>
              <CardTitle className="text-3xl md:text-5xl">Shop</CardTitle>
            </div>
            <CardDescription>Buy what ever you want.</CardDescription>
          </div>

          <Button
            className="bg-violet-600 text-white hover:bg-violet-400
          "
          >
            refresh
          </Button>
        </CardHeader>
      </Card>
      <Card className="mt-6">
        <CardContent className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-6 text text-white">
          {shop.map((item) => (
            <Hero key={item.neme} item={item.name} price={item.price} emoji={item.emoji} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
