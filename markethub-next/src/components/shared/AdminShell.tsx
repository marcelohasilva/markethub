"use client";

import { PropsWithChildren } from "react";
import ProtectedAdminLayout from "./ProtectedAdminLayout";
import RequireActiveStore from "./RequireActiveStore";

export default function AdminShell({ children }: PropsWithChildren) {
  return (
    <RequireActiveStore>
      <ProtectedAdminLayout>{children}</ProtectedAdminLayout>
    </RequireActiveStore>
  );
}

