import MultiStep from "@/page-components/MultiStep";
import { getServerTranslations } from "@/utils/getServerTranslations";

export const getStaticProps = async (context) => {
    const { locale } = context;
    const i18nNamespaces = ["common", "home"]; // Assuming you have defined i18nNamespaces
    console.log("locale", locale);
    return {
      props: {
        ...(await getServerTranslations(locale, i18nNamespaces)),
      },
    };
  };


  export default MultiStep;