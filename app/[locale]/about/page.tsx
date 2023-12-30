import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations, useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

const About = () => {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <div>
        <Link href="/">go home</Link>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default About;
