import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile(photo) {
    return(
    <Avatar className="h-35 w-35 p-4 rounded-full">
  <AvatarImage src={photo.img} />
  <AvatarFallback>SW</AvatarFallback>
</Avatar>
    );
}
