import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config.mjs"; // Assuming this is an ES module

const getServerTranslations = async (
  locale,
  namespacesRequired,
  configOverride,
  extraLocales
) => {
  const config = configOverride ?? i18n;
  return serverSideTranslations(
    locale,
    namespacesRequired,
    config,
    extraLocales
  );
};

export { getServerTranslations };
