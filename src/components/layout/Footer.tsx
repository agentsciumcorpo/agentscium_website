import Link from 'next/link';
import Container from '@/components/ui/Container';
import { navLinks, footerLinks } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#111144] text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F98513] to-[#9BACD8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">Agentscium</span>
            </Link>
            <p className="text-[#9BACD8] mb-6">
              Agence d&apos;automatisation IA qui construit des systemes sur-mesure
              pour PME industrielles, BTP et agences.
            </p>
            <p className="text-sm text-[#9BACD8]/60">
              Rentable en 2 mois. Disponible 24/7.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9BACD8] hover:text-[#F98513] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9BACD8] hover:text-[#F98513] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-[#9BACD8]">
              <li>
                <a
                  href="mailto:contact@agentscium.com"
                  className="hover:text-[#F98513] transition-colors"
                >
                  contact@agentscium.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F98513] text-white px-4 py-2 rounded-full hover:bg-[#e07610] transition-colors mt-2"
                >
                  Obtenir un audit gratuit
                </Link>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/company/agentscium"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#9BACD8]/20 rounded-full flex items-center justify-center hover:bg-[#F98513] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/agentscium"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#9BACD8]/20 rounded-full flex items-center justify-center hover:bg-[#F98513] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#9BACD8]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#9BACD8]/60">
            &copy; {new Date().getFullYear()} Agentscium. Tous droits reserves.
          </p>
          <div className="flex gap-6 text-sm text-[#9BACD8]/60">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
