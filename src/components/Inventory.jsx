import { Button } from "./ui/Button";
import { StatsCard } from "./StartCard";
import { Level } from "./Level";
import { Hero } from "./Hero";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  Backpack,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Profile } from "./Profile";

export function Inventory() {
  const [item, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchPlayer = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await axios.get(
        "https://cyber-rpg-production.up.railway.app/api/player",
        {
          withCredentials: true,
        }
      );

      console.log("noob");
      setItem(response.data.inventory);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchPlayer(); // <-- You forgot this line
}, []);

  if (error) {
    return <h1>Somthing went wrong</h1>;
  }

  const noob = () => {
    axios
      .get("https://cyber-rpg-production.up.railway.app/api/player", {
        withCredentials: true,
      })
      .then((res) => {setItem(res.data.inventory)})
      .catch((err) => console.log(err.response?.data));
  };
  return (
    <div className="w-full text-center">
      <Card>
        <CardHeader className="flex flex-col md:flex-row justify-between items-center gap-6 p-4 md:p-8 lg:p-10">
          <div>
            <div className="flex">
            <div className="flex items-center gap-3">
              <Backpack className="h-10 w-10 text-[#7050F0]" />
            </div>
            <CardTitle className="text-3xl md:text-5xl">Inventory</CardTitle>
            </div>
            <CardDescription>Manage all your collected items.</CardDescription>
          </div>

          <Button
            className="bg-violet-600 text-white hover:bg-violet-400"
            onClick={noob}
          >
            refresh
          </Button>
        </CardHeader>
      </Card>
      <Card className="mt-6">
        <CardContent className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-6 text text-white">
          {item.map((element, index) => {
            return (
              <Hero
                key={index}
                item={element.name}
                emoji={element.emoji}
                price={element.price}
              />
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
