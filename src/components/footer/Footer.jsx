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

        {/* Middle */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          <div className="space-y-2">
            <h2 className="font-semibold text-white">Destinations</h2>
            <FooterLink
              href="/cancun-airport-transportation"
              text="Cancun Airport Transportation"
            />
            <FooterLink
              href="/transportation-from-cancun-to-playa-del-carmen"
              text="Playa del Carmen Transportation"
            />
            <FooterLink
              href="/cancun-to-tulum-shuttle"
              text="Tulum Transfers"
            />
            <FooterLink
              href="/playa-mujeres-transportation"
              text="Playa Mujeres"
            />
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-white">Other destinations</h2>
            <FooterLink
              href="/transportation-to-costa-mujeres"
              text="Costa Mujeres"
            />
            <FooterLink href="/holbox-transfers" text="Holbox" />
            <FooterLink
              href="/transportation-from-cancun-airport-to-puerto-morelos"
              text="Puerto Morelos"
            />
            <FooterLink
              href="/transportation-from-cancun-to-puerto-juarez"
              text="Puerto Juárez"
            />
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-white">Legal</h2>
            <FooterLink href="/privacy-policy" text="Privacy Policy" />
            <FooterLink
              href="/terms-and-conditions"
              text="Terms & Conditions"
            />
            <FooterLink href="/cookie-policy" text="Cookie Policy" />
            <FooterLink href="/contact" text="Contact" />
            <FooterLink href="/reviews" text="Reviews" />
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-white">Help</h2>
            <FooterLink href="/login" text="Your reservation" />
            <FooterLink
              href="mailto:bookings@sacbetransfers.com"
              text="bookings@sacbetransfers.com"
            />
            <FooterLink href="tel:+529989800436" text="+52 (998) 980 0436" />
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold text-white">Top Destinations</h2>
            <FooterLink
              href="https://cabo-airport-shuttle.com"
              text="Cabo Airport Shuttle"
            />
            <FooterLink
              href="https://puntacanatransfersairport.com"
              text="Punta Cana Airport Transfers"
            />
          </div>
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
