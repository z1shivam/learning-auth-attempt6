import { signOut } from "@/auth"
import { Button } from "../ui/button"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({
          redirectTo: "/login"
        })
      }}
    >
      <Button variant={"default"} size={"lg"} type="submit">Sign Out</Button>
    </form>
  )
}