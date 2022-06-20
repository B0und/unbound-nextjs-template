import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const fullLocaleName = {
  us: "English",
  ru: "Russian",
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter((locale) => locale !== activeLocale);

  return (
    <div>
      <p>Change language:</p>
      <ul>
        {otherLocales?.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a className="flex gap-4 items-center">
                  <Image
                    src={`/flags/${locale}.svg`}
                    height={30}
                    width={30}
                    alt={`${locale} flag`}
                  />
                  {fullLocaleName[locale as keyof typeof fullLocaleName]}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
