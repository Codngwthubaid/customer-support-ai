"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {

  const add_user = useMutation(api.users.add_handler)
  const user = useQuery(api.users.getMany)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Assalam Walakium - widget/app</h1>
        <Button onClick={() => add_user()}>Add</Button>
        <p>{JSON.stringify(user)}</p>
      </div>
    </div>
  )
}
