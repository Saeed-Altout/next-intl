"use client";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import React from "react";

const About = ({ params: { locale } }: { params: { locale: any } }) => {
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
