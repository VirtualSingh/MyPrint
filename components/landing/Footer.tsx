interface FooterProps {}

const productLinks = [
  { label: 'How it works', href: '#' },
  { label: 'Browse categories', href: '#' },
  { label: 'Track an order', href: '#' },
  { label: 'Pricing', href: '#' },
]

const vendorLinks = [
  { label: 'Register your shop', href: '#' },
  { label: 'Vendor dashboard', href: '#' },
  { label: 'How payouts work', href: '#' },
  { label: 'Vendor FAQ', href: '#' },
]

const companyLinks = [
  { label: 'Contact', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Support', href: '#' },
]

export default function Footer({}: FooterProps) {
  return (
    <footer style={{ backgroundColor: '#1F1F1F' }} className="text-white">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-base font-semibold text-white mb-3">MyPrint</div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#9AA0A6' }}>
              The print marketplace for Delhi NCR. Get anything printed — from visiting cards to
              flex banners — delivered to your door.
            </p>
            <div
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border"
              style={{ color: '#9AA0A6', borderColor: '#333333' }}
            >
              <span>📍</span>
              <span>Currently serving Delhi NCR</span>
            </div>
          </div>

          {/* Column 2 — Product */}
          <div>
            <h4
              className="text-[11px] font-semibold tracking-[1px] uppercase mb-4"
              style={{ color: '#9AA0A6' }}
            >
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: '#9AA0A6' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — For Vendors */}
          <div>
            <h4
              className="text-[11px] font-semibold tracking-[1px] uppercase mb-4"
              style={{ color: '#9AA0A6' }}
            >
              For Vendors
            </h4>
            <ul className="flex flex-col gap-3">
              {vendorLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: '#9AA0A6' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4
              className="text-[11px] font-semibold tracking-[1px] uppercase mb-4"
              style={{ color: '#9AA0A6' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: '#9AA0A6' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: '#333333' }}>
        <div className="max-w-container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs" style={{ color: '#9AA0A6' }}>
            © 2025 MyPrint. All rights reserved.
          </span>
          <span className="text-xs" style={{ color: '#9AA0A6' }}>
            Made with care for Delhi NCR printers &amp; buyers.
          </span>
        </div>
      </div>
    </footer>
  )
}
