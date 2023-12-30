import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home({
  params: { locale },
}: {
  params: { locale: any };
}) {
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
