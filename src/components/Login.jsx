import React from "react";
import { Button } from "./ui/Button";
import { Backpack, LogIn } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

const Login = () => {
  return (
    <div className="w-screen h-screen text-center">
      <Card className="w-full h-full text-center">
        <CardHeader className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 md:p-8 lg:p-10">
          <CardContent>
            <Button
              className="p-6 bg-violet-700 text-white hover:bg-violet-600"
              onClick={() => {
                window.location.href =
                  "https://cyber-rpg.onrender.com/auth/discord";
              }}
            >
              Login with Discord <LogIn />
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Login;
