import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default function Home({
  params: { locale },
}: {
  params: { locale: any };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("IndexPage");

  return (
    <main>
      <h1>{t("title")}</h1>
      <Link href="/about" locale={locale}>
        go about
      </Link>
      <LocaleSwitcher />
    </main>
  );
}
