import React from 'react';
import Navbar from './Navbar';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     <header className="bg-indigo-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-center">Rate Us Pro</h1>
          <div className="mt-4 flex justify-center">
            <Navbar />
          </div>
        </div>
      </header>
      <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Terms and Conditions</h1>
            
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Effective Date:</span> [Insert Date]
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h2>
                <p className="text-gray-600">
                  Welcome to <span className="font-medium">Rate Us Pro</span> ("we," "us," or "our"). 
                  These Terms and Conditions ("Terms") govern your use of the Rate Us Pro mobile 
                  application (the "App"), and by accessing or using the App, you agree to comply 
                  with these Terms. If you do not agree to these Terms, please do not use the App.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By using the App, you agree to these Terms and any future modifications. We may 
                  update these Terms from time to time, and the updated version will be posted 
                  within the App or on our website. It is your responsibility to review these 
                  Terms periodically to stay informed about any changes.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Eligibility</h2>
                <p className="text-gray-600">
                  To use the App, you must be at least 13 years old. By using the App, you represent 
                  and warrant that you are at least 13 years of age, or have obtained consent from a 
                  parent or guardian if you are under the age of 18.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. User Account</h2>
                <p className="text-gray-600">
                  To access certain features of the App, such as submitting reviews and ratings, you 
                  may be required to create an account. You agree to provide accurate, current, and 
                  complete information during the registration process and to update your information 
                  as necessary. You are responsible for maintaining the confidentiality of your account 
                  credentials and for all activities under your account.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Use of the App</h2>
                <p className="text-gray-600 mb-2">
                  You agree to use the App only for lawful purposes and in accordance with these Terms. 
                  You may not use the App to:
                </p>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>Post or transmit any unlawful, defamatory, abusive, offensive, or harmful content.</li>
                  <li>Engage in any fraudulent, misleading, or deceptive activities.</li>
                  <li>Use the App to harass, bully, or threaten others.</li>
                  <li>Attempt to gain unauthorized access to any part of the App or its associated systems.</li>
                  <li>Violate any applicable laws, rules, or regulations.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Reviews and Ratings</h2>
                <p className="text-gray-600 mb-2">
                  The App allows you to submit reviews and ratings for various service providers 
                  (e.g., restaurants, stores, etc.). By submitting a review, you agree that:
                </p>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>Your review will be public and may be shared with the service provider and other users.</li>
                  <li>You will provide honest, fair, and accurate feedback based on your personal experiences.</li>
                  <li>You will not submit content that violates these Terms, including but not limited to 
                      content that is illegal, harmful, or infringes on the rights of others.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Intellectual Property</h2>
                <p className="text-gray-600">
                  All content and materials in the App, including text, graphics, logos, images, and 
                  software, are the property of Rate Us Pro or its licensors and are protected by 
                  copyright, trademark, and other intellectual property laws. You agree not to reproduce, 
                  distribute, or create derivative works based on the content of the App without our 
                  express written consent.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Privacy</h2>
                <p className="text-gray-600">
                  Your use of the App is governed by our Privacy Policy, which can be found 
                  <a href="#" className="text-blue-600 hover:underline"> here</a>. By using the App, 
                  you consent to the collection, use, and sharing of your personal information as 
                  outlined in the Privacy Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Third-Party Links</h2>
                <p className="text-gray-600">
                  The App may contain links to third-party websites or services that are not owned 
                  or controlled by Rate Us Pro. We are not responsible for the content, privacy policies, 
                  or practices of any third-party websites. We recommend reviewing the terms and privacy 
                  policies of any third-party sites you visit.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Disclaimers and Limitation of Liability</h2>
                <ul className="space-y-4 text-gray-600 pl-6 list-none">
                  <li>
                    <span className="font-medium">No Warranty:</span> The App is provided "as is" and "as available" 
                    without any warranties of any kind, either express or implied. We do not guarantee that the 
                    App will be error-free, uninterrupted, or free from viruses or other harmful components.
                  </li>
                  <li>
                    <span className="font-medium">Limitation of Liability:</span> To the maximum extent permitted 
                    by applicable law, Rate Us Pro and its affiliates, employees, and partners will not be liable 
                    for any indirect, incidental, special, or consequential damages arising from or related to 
                    your use of the App.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify, defend, and hold harmless Rate Us Pro, its affiliates, officers, 
                  directors, employees, and agents from and against any claims, liabilities, damages, losses, 
                  or expenses (including legal fees) arising from your use of the App, violation of these 
                  Terms, or infringement of the rights of any third party.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">11. Termination</h2>
                <p className="text-gray-600">
                  We reserve the right to suspend or terminate your access to the App at our discretion, 
                  without notice, if you violate these Terms or engage in activities that we believe may 
                  harm the App or its users.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">12. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms and your use of the App will be governed by and construed in accordance with 
                  the laws of [Your Jurisdiction]. Any disputes arising from or related to these Terms will 
                  be resolved in the competent courts of [Your Jurisdiction].
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">13. Severability</h2>
                <p className="text-gray-600">
                  If any provision of these Terms is found to be unlawful, void, or unenforceable, the 
                  remaining provisions will remain in full force and effect.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">14. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions or concerns about these Terms, please contact us at:
                </p>
                <div className="mt-2 text-gray-600">
  <p className="font-medium">Rate Us Pro</p>
  <p>123, MG Road, Indiranagar, Bengaluru, Karnataka, 560038, India</p>
  <p>contact@rateuspro.com</p>
  <p>+91 98765 43210</p>
</div>
              </section>
              
              <section>
                <p className="text-gray-500 text-sm italic mt-6">
                  This template provides a comprehensive framework for your app's Terms and Conditions. 
                  Make sure to tailor the details (such as your jurisdiction and contact information) to 
                  your specific needs, and consider consulting with a legal professional to ensure 
                  compliance with relevant laws and regulations.
                </p>
              </section>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 sm:px-10">
            <p className="text-sm text-gray-500 text-center">
              © 2025 Rate Us Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;