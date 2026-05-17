"use client";

import { PropsWithChildren } from "react";
import ProtectedAdminLayout from "./ProtectedAdminLayout";

export default function AdminShell({ children }: PropsWithChildren) {
  return <ProtectedAdminLayout>{children}</ProtectedAdminLayout>;
}

