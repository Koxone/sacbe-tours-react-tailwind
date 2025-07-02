import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n, t } = useTranslation();

  return (
    <footer className="mt-14 bg-neutral-900 px-10 py-10 text-neutral-200">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top */}
        <div className="flex items-center justify-between gap-4 sm:flex-row">
          <div className="shrink-0">
            <a href="https://sacbetransfers.com/" target="_blank">
              <img
                src="/assets/sacbe.svg"
                alt="Sacbé Transfers"
                title="Sacbé Transfers"
                loading="lazy"
                width={130}
                height={50}
                className="h-auto w-[130px]"
              />
            </a>
          </div>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/sacbetransfers" target="_blank">
              <img
                className="w-9"
                src="/assets/facebook.svg"
                alt="Facebook Icon"
              />
            </a>
            <a href="https://www.instagram.com/sacbetransfers/" target="_blank">
              <img
                className="w-10"
                src="/assets/instagram.svg"
                alt="Instagram Icon"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-700 pt-6 sm:flex-row">
          <p className="text-sm">{t("footer.copyright")}</p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/visa.svg"
                alt="Visa"
                title="Visa"
                width={30}
                height={30}
                loading="lazy"
              />
              <img
                src="/mastercard.svg"
                alt="Mastercard"
                title="Mastercard"
                width={30}
                height={30}
                loading="lazy"
              />
              <img
                src="/amex.svg"
                alt="AMEX"
                title="AMEX"
                width={30}
                height={30}
                loading="lazy"
              />
            </div>
            <img
              src="/paypal.svg"
              alt="PayPal"
              title="PayPal"
              width={60}
              height={27}
              loading="lazy"
            />
            <img
              src="/stripe.svg"
              alt="Stripe"
              title="Stripe"
              width={100}
              height={48}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
