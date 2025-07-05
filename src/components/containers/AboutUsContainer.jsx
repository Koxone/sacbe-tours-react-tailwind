import { useTranslation } from "react-i18next";

function AboutUsContainer() {
  const { i18n, t } = useTranslation();

  return (
    <div className="w-full md:w-[70%] md:rounded-t-lg bg-[#297da9] p-5">
      <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-[40px]">
        {t("aboutUs.title")}
      </h2>
      <p className="text-center text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
        reiciendis optio quas sed ipsum asperiores sapiente doloribus
        consequatur soluta natus? Eligendi et cupiditate quidem esse quos
        sapiente reiciendis ut ex!
      </p>
    </div>
  );
}

export default AboutUsContainer;
