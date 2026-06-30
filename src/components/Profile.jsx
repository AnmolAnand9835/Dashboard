import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile() {
    return(
    <Avatar className="h-30 w-30">
  <AvatarImage src="https://cdn.discordapp.com/avatars/1449494332150382672/ac0ab9c3af53020918bff34f0a980b62.png?size=512" />
  <AvatarFallback>SW</AvatarFallback>
</Avatar>
    );
}
