import React, { useEffect, useState } from "react";

function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // Fetch footer data from JSON file
    fetch("../../public/data/Footer.json") // Adjust path if needed
      .then((response) => response.json())
      .then((data) => setFooterData(data));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Useful Links */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Useful Links</h3> */}
            <ul className="space-y-2">
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
  <h3 className="text-center font-semibold mb-8 text-4xl">Selecao</h3>
  <p className="text-white">
    Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
  </p>
  <ul className="flex space-x-4 justify-center">
    {footerData.socials.map((social, index) => (
      <li key={index}>
        <a
          href={social.url}
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-orange-500 text-white w-10 h-10 hover:bg-orange-600 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
            <i className={`${social.icon} text-lg`}></i>
          </div>
        </a>
      </li>
    ))}
  </ul>
</div>


          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                {/* <i className="fas fa-envelope mr-2"></i> */}
                {footerData.contact.email}
              </li>
              <li>
                {/* <i className="fas fa-phone mr-2"></i> */}
                {footerData.contact.phone}
              </li>
              <li>
                {/* <i className="fas fa-map-marker-alt mr-2"></i> */}
                {footerData.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
