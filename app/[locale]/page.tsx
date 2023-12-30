import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <main>
      <h1>{t("title")}</h1>
      <Link href="/about">go about</Link>
      <LocaleSwitcher />
    </main>
  );
}
