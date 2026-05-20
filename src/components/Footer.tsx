function Footer() {
  const socialLinks = [
    { name: "Github", link: "https://github.com/m-ohit-s" },
    { name: "Linkedin", link: "https://www.linkedin.com/in/mohit-sadhwani-9b6b22173/" },
    { name: "Leetcode", link: "https://leetcode.com/u/m_ohits/" },
  ];

  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="font-heading">
          <p className="text-2xl md:text-3xl font-semibold">
            Portfolio
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 md:gap-10">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer opacity-60 hover:opacity-100 hover:text-primary transition-all duration-200 underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;