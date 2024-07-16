"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers: React.FC<any> = ({children}: any) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers;
