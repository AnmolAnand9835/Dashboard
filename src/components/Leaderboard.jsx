import { Crown, Trophy, Medal, Coins, Star } from "lucide-react";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(
          "https://cyber-rpg-production.up.railway.app/api/player",
          {
            withCredentials: true,
          },
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

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(
          "https://cyber-rpg.onrender.com/api/leaderboard",
        );

        setLeaderboard(response.data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer(); // <-- You forgot this line
  }, []);

  return (
    <div className="max-w-4xl mx-auto w-screen dark text-white">
      <h1 className="text-4xl font-bold text-center mb-8">🏆 Leaderboard</h1>

      <div className="space-y-4">
        {leaderboard?.map((player) => (
          <div
            key={player.rank}
            className={`
              flex items-center justify-between
              rounded-xl
              p-5
              border
              w-full

              ${
                player.rank === 1
                  ? "border-yellow-400 bg-yellow-500/10"
                  : player.rank === 2
                    ? "border-zinc-400 bg-zinc-500/10"
                    : player.rank === 3
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-zinc-800 bg-zinc-900"
              }

              ${player.username === user.username ? "ring-2 ring-[#7050F0]" : ""}
            `}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">
                {player.rank === 1 && <Crown className="text-yellow-400" />}

                {player.rank === 2 && <Trophy className="text-zinc-300" />}

                {player.rank === 3 && <Medal className="text-orange-500" />}

                {player.rank > 3 && (
                  <span className="font-bold">#{player.rank}</span>
                )}
              </div>

              <div>
                <h2 className="font-bold text-lg">
                  {player.username}

                  {player.username === user.username && (
                    <span className="ml-2 text-[#7050F0]">YOU</span>
                  )}
                </h2>

                <p className="text-zinc-400">Level {player.level}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <Coins className="text-yellow-400 h-5" />
                <span className="font-bold">
                  {player.credits.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-2 justify-end mt-2">
                <Star className="h-4 text-[#7050F0]" />
                <span>Lv {player.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
