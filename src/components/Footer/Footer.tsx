import React from "react";
import './Footer.css'
export default function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-full" />
            <h2 className="text-lg font-semibold">
              MEDICAL <span className="text-yellow-400">HEALTH CARE</span>
            </h2>
          </div>
          <p className="text-sm text-gray-300 leading-6">
            Lorem ipsum dolor sit amet consectetur. Eget morbi aliquet tristique
            et accumsan.
          </p>
          <p className="mt-4 text-sm flex items-center gap-1">
            Made with <span className="text-red-500">❤</span> in India
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <i className="ri-facebook-circle-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-linkedin-box-fill"></i>
          </div>
        </div>

        {/* About Health */}
        <div>
          <h3 className="font-semibold mb-4">About Health</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Press & Media</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Advertise with Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* For Patients & Practices */}
        <div>
          <h3 className="font-semibold mb-4">For Patients</h3>
          <ul className="space-y-2 text-sm text-gray-300 mb-6">
            <li>Sign up</li>
            <li>Log in</li>
            <li>Subscribe to our blog</li>
          </ul>

          <h3 className="font-semibold mb-4">For Practices</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>List Your Practice</li>
            <li>Practice Portal</li>
            <li>Practice Pricing</li>
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h3 className="font-semibold mb-4">Specialties</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Walk-In Medical Clinic</li>
            <li>Naturopath</li>
            <li>Mental Health Practitioner</li>
            <li>Physiotherapist</li>
            <li>Optometrist</li>
            <li>Dietitian</li>
            <li>Chiropractor</li>
            <li>Audiologist</li>
            <li>Massage Therapist</li>
            <li>Osteopath</li>
            <li>Pharmacy</li>
            <li>Dentist</li>
            <li>Acupuncturist</li>
            <li>Occupational Therapist</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© Copyright 2023 Health care</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <p>Terms of Service</p>
          <span>•</span>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}