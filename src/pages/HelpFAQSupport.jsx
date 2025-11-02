import React from 'react';

const HelpFAQSupport = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* TopNavBar */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-subtle-gray/60 dark:border-gray-700 px-4 sm:px-6 lg:px-10 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <div className="flex items-center gap-4 text-navy dark:text-white">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-navy dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Voice Bharat</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <div className="flex items-center gap-9">
              <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Campaigns</a>
              <a className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Issues</a>
              <a className="text-primary dark:text-primary text-sm font-bold leading-normal" href="#">Help Center</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
              <span className="truncate">Create Post</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-300 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt="User profile picture"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmXJCR07OlCdlMAANgfZE3qVqzXS2cgT3RJX2R4hhKApzlDHNcxPfMsQHpZBBhljCyFKYUnrfhPplmjzS-qnslWRVZElaEpWcNvY8_O-fifu9WPZb3LNtJLxCK-sr4zwVhZ5JLpv8Wtk76OqbYcpGiazENJWYciYLBZeEM4WGTB58jxQplVXCUfVoCW-9qcx2L1OwIOBODkq9MNy4J2JHPKjruyEvU0YzGma0j0uaMRByVII_xWPpm0bWGMJCM06hkDUxlTFQZ5g")',
              }}
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block lg:w-64 lg:sticky lg:top-24 self-start">
              <nav className="flex flex-col gap-2">
                <h3 className="px-3 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">On this page</h3>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy dark:text-gray-300 bg-primary/20 dark:bg-primary/30 font-semibold" href="#quick-access">
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                  <span>Quick Access</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800" href="#faq">
                  <span className="material-symbols-outlined text-lg">quiz</span>
                  <span>FAQs</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800" href="#contact">
                  <span className="material-symbols-outlined text-lg">support_agent</span>
                  <span>Contact Support</span>
                </a>
              </nav>
            </aside>

            {/* Page Content */}
            <div className="flex-1 min-w-0">
              {/* Hero */}
              <div className="flex flex-col items-center text-center gap-4 mb-12">
                <p className="text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight tracking-tighter">Help &amp; Support Center</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">How can we help you, Voice of Bharat?</p>
              </div>

              {/* Search Bar */}
              <div className="max-w-3xl mx-auto mb-16">
                <label className="flex flex-col min-w-40 h-14 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm border border-subtle-gray/80 dark:border-gray-700">
                    <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-xl border-r-0">
                      <span className="material-symbols-outlined text-2xl">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white dark:bg-gray-800 h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      placeholder="Search for help, e.g., 'How to start a fundraiser?'"
                      defaultValue=""
                    />
                  </div>
                </label>
              </div>

              {/* Quick Access Grid */}
              <section className="mb-16 scroll-mt-24" id="quick-access">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {[
                    { icon: 'integration_instructions', title: 'How-to Guides', desc: 'Tutorials on key actions' },
                    { icon: 'quiz', title: 'FAQs', desc: 'Answers to common questions' },
                    { icon: 'policy', title: 'Platform Policies', desc: 'Our rules, privacy, and terms' },
                    { icon: 'groups', title: 'Community Guidelines', desc: "The dos and don'ts of our platform" },
                    { icon: 'school', title: 'Civic Education', desc: 'Resources on Indian civics' },
                    { icon: 'support_agent', title: 'Contact Support', desc: 'Get in touch with our team' },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-1 gap-4 rounded-xl border border-subtle-gray dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 flex-col hover:border-primary dark:hover:border-primary transition-colors">
                      <span className="material-symbols-outlined !text-3xl text-primary">{item.icon}</span>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold text-navy dark:text-white">{item.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16 scroll-mt-24" id="faq">
                <h2 className="text-3xl font-bold text-navy dark:text-white tracking-tight pb-6 pt-5">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {/* Item 1 */}
                  <details className="group rounded-xl bg-white dark:bg-gray-800/50 p-5 border border-subtle-gray dark:border-gray-700" open>
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-navy dark:text-white">
                      <span>How do I start a campaign or fundraiser?</span>
                      <span className="transition group-open:rotate-180">
                        <span className="material-symbols-outlined">expand_more</span>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-4 text-gray-600 dark:text-gray-400">
                      To start a campaign, navigate to the 'Campaigns' section from the main menu and click 'Create New Campaign'. Fill in the required details about your cause, set a goal, and publish. For fundraisers, the process is similar under the 'Fundraisers' tab. Ensure you have all necessary documentation ready for verification.
                    </p>
                  </details>
                  {/* Item 2 */}
                  <details className="group rounded-xl bg-white dark:bg-gray-800/50 p-5 border border-subtle-gray dark:border-gray-700">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-navy dark:text-white">
                      <span>What are the platform fees for fundraising?</span>
                      <span className="transition group-open:rotate-180">
                        <span className="material-symbols-outlined">expand_more</span>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-4 text-gray-600 dark:text-gray-400">
                      Voice Bharat is committed to supporting civic action. We charge a minimal platform fee of 2% to cover operational costs. Additionally, standard payment gateway fees (usually around 2-3%) apply to all transactions. We believe in transparency, and a full breakdown is available on our 'Platform Policies' page.
                    </p>
                  </details>
                  {/* Item 3 */}
                  <details className="group rounded-xl bg-white dark:bg-gray-800/50 p-5 border border-subtle-gray dark:border-gray-700">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-navy dark:text-white">
                      <span>How is my personal data protected?</span>
                      <span className="transition group-open:rotate-180">
                        <span className="material-symbols-outlined">expand_more</span>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-4 text-gray-600 dark:text-gray-400">
                      We take your privacy seriously. All data is encrypted both in transit and at rest. We comply with Indian data protection laws and have a strict privacy policy that outlines how your data is used. You have full control over your privacy settings in your account profile. We do not sell user data to third parties.
                    </p>
                  </details>
                </div>
              </section>

              {/* Contact Form */}
              <section className="scroll-mt-24" id="contact">
                <div className="rounded-xl border border-subtle-gray dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 md:p-8">
                  <h2 className="text-3xl font-bold text-navy dark:text-white tracking-tight">Still need help?</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6">Contact our support team directly. We typically respond within 24 hours.</p>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">Name</label>
                        <input className="form-input block w-full rounded-lg border-subtle-gray dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:border-primary focus:ring-primary/50" id="name" name="name" placeholder="Your Name" type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email</label>
                        <input className="form-input block w-full rounded-lg border-subtle-gray dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:border-primary focus:ring-primary/50" id="email" name="email" placeholder="your.email@example.com" type="email" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="subject">Subject</label>
                      <input className="form-input block w-full rounded-lg border-subtle-gray dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:border-primary focus:ring-primary/50" id="subject" name="subject" placeholder="How can we help?" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">Message</label>
                      <textarea className="form-textarea block w-full rounded-lg border-subtle-gray dark:border-gray-600 bg-background-light dark:bg-gray-700 focus:border-primary focus:ring-primary/50" id="message" name="message" placeholder="Please describe your issue in detail..." rows={4} />
                    </div>
                    <div>
                      <button className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="submit">
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HelpFAQSupport;
