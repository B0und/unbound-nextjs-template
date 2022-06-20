import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const fullLocaleName = {
  us: "English",
  ru: "Русский",
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter((locale) => locale !== activeLocale);

  function changeLocale(locale: string) {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    );

    // Override the accept language header to persist chosen language
    // @see https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
    Cookies.set("NEXT_LOCALE", locale);
  }

  return (
    <div>
      <p>Change language:</p>
      <ul>
        {otherLocales?.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a className="flex gap-4 items-center" onClick={() => changeLocale(locale)}>
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
