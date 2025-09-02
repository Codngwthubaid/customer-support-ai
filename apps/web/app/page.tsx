"use client"

import { useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"

export default function Page() {

  const user = useQuery(api.users.getMany)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Assalam Walakium - web/app</h1>
        <p>{JSON.stringify(user)}</p>
      </div>
    </div>
  )
}
