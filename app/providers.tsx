"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { FormContextProvider } from "./form/formContext";
import { GrupoContextoProvider } from "./form/useGrupoContexto";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <FormContextProvider>
        <GrupoContextoProvider>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </GrupoContextoProvider>
      </FormContextProvider>
    </NextUIProvider>
  );
}
