import React from 'react';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h1>
            
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Effective Date:</span> 10/03/2025
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h2>
                <p className="text-gray-600">
                  Rate Us Pro ("we," "us," or "our") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our mobile application (the "App"). By using the App, 
                  you consent to the data practices described in this Privacy Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
                <p className="text-gray-600 mb-2">
                  We collect the following types of information when you use the App:
                </p>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Personal Information:</span> When you register or use the App, 
                    you may be asked to provide personal details, such as your name, email address, and other 
                    contact details, to facilitate your account or profile.
                  </li>
                  <li>
                    <span className="font-medium">Review Information:</span> When you submit reviews or ratings 
                    for service providers (such as restaurants, stores, or other vendors), we collect the content 
                    of your feedback, including text, ratings, and any other information you provide.
                  </li>
                  <li>
                    <span className="font-medium">Location Information:</span> We may collect your device's 
                    location data (with your consent) to suggest nearby service providers for you to rate.
                  </li>
                  <li>
                    <span className="font-medium">Device Information:</span> Information about your device, 
                    including your IP address, browser type, operating system, device identifiers, and usage 
                    patterns within the App, may be collected automatically.
                  </li>
                  <li>
                    <span className="font-medium">Cookies and Tracking Technologies:</span> We use cookies and 
                    similar technologies to enhance your user experience, analyze App usage, and personalize 
                    content and ads.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-2">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    <span className="font-medium">To provide and improve the App:</span> We use your information 
                    to operate, maintain, and improve the services and features of the App.
                  </li>
                  <li>
                    <span className="font-medium">To process reviews and ratings:</span> Your submitted reviews, 
                    ratings, and feedback will be made available to the service providers you review, and may 
                    be used for marketing purposes by the service providers.
                  </li>
                  <li>
                    <span className="font-medium">To communicate with you:</span> We may use your contact 
                    information to send you updates, promotions, or other communications related to the App 
                    or the services you interact with.
                  </li>
                  <li>
                    <span className="font-medium">To customize your experience:</span> We may use your information 
                    to personalize your experience within the App by showing relevant service providers based on 
                    your preferences and location.
                  </li>
                  <li>
                    <span className="font-medium">To comply with legal obligations:</span> We may use your 
                    information as required to comply with applicable laws, regulations, or legal processes.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Sharing Your Information</h2>
                <p className="text-gray-600 mb-2">
                  We do not sell or rent your personal information. However, we may share your information 
                  in the following situations:
                </p>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    <span className="font-medium">With service providers:</span> We may share your reviews and 
                    ratings with the service providers (e.g., restaurants, stores) you review, allowing them 
                    to understand customer feedback.
                  </li>
                  <li>
                    <span className="font-medium">With third-party vendors:</span> We may share your information 
                    with third-party service providers who perform functions on our behalf (e.g., hosting, data 
                    analytics, customer service).
                  </li>
                  <li>
                    <span className="font-medium">With legal authorities:</span> We may disclose your information 
                    if required by law or in response to valid requests by public authorities (e.g., a court order).
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Retention</h2>
                <p className="text-gray-600">
                  We retain your personal data for as long as necessary to provide services, comply with legal 
                  obligations, resolve disputes, and enforce agreements. If you wish to delete your account or 
                  reviews, you may contact us, and we will process your request in accordance with applicable law.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Security of Your Information</h2>
                <p className="text-gray-600">
                  We use commercially reasonable security measures to protect your information from unauthorized 
                  access, use, or disclosure. However, no data transmission or storage method is 100% secure, and 
                  we cannot guarantee absolute security.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights and Choices</h2>
                <p className="text-gray-600 mb-2">
                  Depending on your location, you may have certain rights regarding your personal information, 
                  including:
                </p>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Access and correction:</span> You can request access to and 
                    correction of your personal data.
                  </li>
                  <li>
                    <span className="font-medium">Deletion:</span> You can request the deletion of your personal data.
                  </li>
                  <li>
                    <span className="font-medium">Opt-out of marketing:</span> You may opt out of receiving 
                    marketing communications by following the unsubscribe instructions in the communication.
                  </li>
                  <li>
                    <span className="font-medium">Data portability:</span> You may request a copy of your personal 
                    information in a structured, commonly used, and machine-readable format.
                  </li>
                </ul>
                <p className="text-gray-600 mt-2">
                  If you wish to exercise any of these rights, please contact us at [email address or contact link].
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Children's Privacy</h2>
                <p className="text-gray-600">
                  The App is not intended for use by individuals under the age of 13, and we do not knowingly collect 
                  personal information from children under 13. If we become aware that we have collected personal 
                  information from a child under 13, we will take steps to delete such information.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, 
                  and the effective date will be updated accordingly. We encourage you to review this Privacy 
                  Policy periodically to stay informed about how we are protecting your information.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions or concerns about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="mt-2 text-gray-600">
                  <p className="font-medium">Rate Us Pro</p>
                  <p>[Company Address]</p>
                  <p>[Email Address]</p>
                  <p>[Phone Number]</p>
                </div>
              </section>
              
              <section>
                <p className="text-gray-500 text-sm italic mt-6">
                  This version reflects the name of your app, "Rate Us Pro." Make sure to customize the placeholders 
                  (like effective date, contact details, etc.) and consult a legal professional to ensure full 
                  compliance with privacy regulations.
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

export default PrivacyPolicy;