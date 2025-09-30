"use client"

import { useMutation } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";


export default function Page() {

  const add_user = useMutation(api.users.add_handler)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Assalam Walakium - web/app</h1>
        <OrganizationSwitcher hidePersonal/>
        <UserButton />
        <Button onClick={() => add_user()}>Add</Button>
      </div>
    </div>
  )
}
