"use client"

import { OrganizationList } from "@clerk/nextjs"

export const OrganizationSelectView = () => {
    return (
        <OrganizationList
            hidePersonal
            skipInvitationScreen
            afterCreateOrganizationUrl={"/"}
            afterSelectPersonalUrl={"/"}
        />
    )
}