const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-600">
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78..."
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              {/* Newsletter Section */}
              <div className="col-span-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  Get the latest news!
                </h2>
                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>

                  <div className="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />
                    <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>

              {/* Footer Columns */}
              {[
                {
                  title: "Services",
                  links: [
                    "1on1 Coaching",
                    "Company Review",
                    "Accounts Review",
                    "HR Consulting",
                    "SEO Optimisation",
                  ],
                },
                {
                  title: "Company",
                  links: ["About", "Meet the Team", "Accounts Review"],
                },
                {
                  title: "Helpful Links",
                  links: ["Contact", "FAQs", "Live Chat"],
                },
                {
                  title: "Legal",
                  links: [
                    "Accessibility",
                    "Returns Policy",
                    "Refund Policy",
                    "Hiring-3 Statistics",
                  ],
                },
                {
                  title: "Downloads",
                  links: ["Marketing Calendar", "SEO Infographics"],
                },
              ].map((section) => (
                <div key={section.title} className="col-span-2 sm:col-span-1">
                  <p className="font-medium text-gray-900">{section.title}</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-700 transition hover:opacity-75"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500">
                © 2026 EventVerse. All rights reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                {["Terms & Conditions", "Privacy Policy", "Cookies"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-500 transition hover:opacity-75"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
