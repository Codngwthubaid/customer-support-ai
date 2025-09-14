"use client"

import { useOrganization } from "@clerk/nextjs"
import { AuthLayout } from "@/modules/auth/ui/layout/auth-layout"
import React from "react"
import { OrganizationSelectView } from "@/modules/auth/ui/views/organization-select-view"

export const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {

    const { organization } = useOrganization();
    if (!organization) {
        return (
            <>
                <AuthLayout>
                    <OrganizationSelectView />
                </AuthLayout>
            </>
        )
    }

    return (
        <>
            {children}
        </>
    )

}