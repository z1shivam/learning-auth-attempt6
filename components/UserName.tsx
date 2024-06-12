import { auth } from "../auth"
 
export  async function UserName() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
 
      <span className="text-blue-600">
        {session.user.name}
      </span>
 
  )
}
export  async function UserEmail() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
 
      <span className="text-blue-600">
        {session.user.email}
      </span>
 
  )
}
