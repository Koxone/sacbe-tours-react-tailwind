import { useTranslation } from "react-i18next";

function AboutUsContainer() {
  const { i18n, t } = useTranslation();

  return (
    <div className="w-full bg-[#297da9] p-5">
      <h2 className="text-center text-[40px] font-bold text-white">
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
