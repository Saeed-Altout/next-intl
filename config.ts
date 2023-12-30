import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "de"] as const;

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    de: "/about",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
