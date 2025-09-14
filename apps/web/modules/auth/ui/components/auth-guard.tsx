"use client"

import { AuthLayout } from "../layout/auth-layout";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { SignInView } from "../views/sign-in-view";
import React from "react";
import { SignUpView } from "../views/sign-up-view";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AuthLoading>
                <AuthLayout>
                    <p>loading...</p>
                </AuthLayout>
            </AuthLoading>

            <Authenticated>
                {children}
            </Authenticated>

            <Unauthenticated>
                <AuthLayout>
                    <SignUpView />
                </AuthLayout>
            </Unauthenticated>
        </>
    )
}
