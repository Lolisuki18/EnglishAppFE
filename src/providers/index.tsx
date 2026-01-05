// Providers - Theme Provider example
"use client";

import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Add your providers here (Theme, Redux, Auth, etc.)
  return <>{children}</>;
}
