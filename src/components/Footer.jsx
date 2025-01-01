import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="col-span-2">
          <p className="text-lg">Email
        </p>
            <input type="Email" />
           
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Shipping ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order history
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Check gift card balance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facial Appointments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Click and Collect
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Video consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Language:
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  繁體中文
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Sustainability Section */}
          <div>
            <h5 className="text-white font-semibold mb-4">Sustainability</h5>
            
            {/* Sustainability Description */}
            <p className="mt-4 text-gray-400 text-sm">
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation.{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                Learn more
              </a>
            </p>
          </div>

          {/* About Section */}
          <div>
            <h5 className="text-white font-semibold mb-4">About</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Foundation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h5 className="text-white font-semibold mb-4">Social Media</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Bar and AESOP */}
        <div className="mt-12 border-t border-gray-600 pt-4 flex items-center justify-between">
          <span className="text-white font-semibold text-lg">AESOP</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
