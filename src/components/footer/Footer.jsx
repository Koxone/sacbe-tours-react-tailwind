// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="mt-14 bg-neutral-900 px-10 py-10 text-neutral-200">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="shrink-0">
            <img
              src="/assets/sacbe.svg"
              alt="Sacbé Transfers"
              title="Sacbé Transfers"
              loading="lazy"
              width={130}
              height={50}
              className="h-auto w-[130px]"
            />
          </div>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.facebook.com/sacbetransfers"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="Facebook | Sacbé Transfers"
                className="transition hover:text-blue-400"
              >
                <svg width="25" height="25">
                  <use xlinkHref="/assets/img/icons.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sacbetransfers/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                title="Instagram | Sacbé Transfers"
                className="transition hover:text-pink-400"
              >
                <svg width="25" height="25">
                  <use xlinkHref="/assets/img/icons.svg#instagram"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-700 pt-6 sm:flex-row">
          <p className="text-sm">2025 Sacbé Transfers. All rights reserved.</p>
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

function FooterLink({ href, text }) {
  return (
    <a
      href={href}
      title={text}
      className="block text-sm text-neutral-400 transition hover:text-white"
    >
      {text}
    </a>
  );
}
