const Footer = () => (
  <footer className="bg-navy border-t border-navy-light py-8">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-cream/50 text-xs">
        © {new Date().getFullYear()} Advocate Sujamya Yadav. All rights reserved.
      </p>
      <p className="text-cream/30 text-xs mt-1">
        This website is meant for informational purposes only and does not constitute legal advertising.
      </p>
    </div>
  </footer>
);

export default Footer;
