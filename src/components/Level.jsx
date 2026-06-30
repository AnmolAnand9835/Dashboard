import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Profile } from "./Profile";

export function Level() {
  return (
    <Card>
      <CardHeader className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 p-4 md:p-8 lg:p-10">
        <div>
        <CardTitle className="text-3xl md:text-5xl">Welcome back, sudo_why 👋</CardTitle>

        <CardDescription>
          Your adventure continues. Explore the world and earn more credits.
        </CardDescription>
        </div>

        <Profile className="w-min hidden md:flex h-24 w-24"/>
      </CardHeader>
    </Card>
  );
}
