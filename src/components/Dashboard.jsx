import { Button } from "./ui/Button";
import { StatsCard } from "./StartCard";
import { Level } from "./Level";
import { Hero } from "./Hero";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [user, setUser] = useState([]);
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

      setUser(response.data);
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

  return (
    <div className="w-full text-center">
      <Level photo={user}/>
      <StatsCard user={user} />
      <Card className="flex flex-col justify-between gap-6 p-2 mt-6">
        <CardHeader>
          <CardTitle className="text-3xl md:text-3xl">Inventory</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-6 text text-white">
          {user.inventory?.map((element, index) => {
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
