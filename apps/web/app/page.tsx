"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";


export default function Page() {

  const user = useQuery(api.users.getMany)
  const add_user = useMutation(api.users.add_handler)

  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <UserButton />
            <h1 className="text-2xl font-bold">Assalam Walakium - web/app</h1>
            <Button onClick={() => add_user()}>Add</Button>
            <p>{JSON.stringify(user)}</p>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Please Authenticate first...</p>
        <SignInButton />
      </Unauthenticated>
    </>
  )
}
