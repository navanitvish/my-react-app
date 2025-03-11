import React from 'react';
import Navbar from './Navbar';

const CancellationPolicy = () => {
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
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Cancellation Policy</h1>
            
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Effective Date:</span> 11/03/2025
            </p>
            
            <div className="space-y-6">
              <section>
                <p className="text-gray-600">
                  At <strong>Rate Us Pro</strong>, we strive to provide our users with the best experience possible. 
                  Our Cancellation Policy outlines the procedures and conditions for canceling any services or 
                  subscriptions provided through the app.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Subscription-Based Services</h2>
                <p className="text-gray-600 mb-3">
                  If you subscribe to any paid features or services provided by Rate Us Pro (such as premium 
                  vendor accounts, enhanced features, etc.), you may cancel your subscription at any time. 
                  Your subscription will remain active until the end of the current billing cycle, and you 
                  will not be charged for the following cycle.
                </p>
                
                <h3 className="text-lg font-medium text-gray-800 mb-2">How to Cancel:</h3>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    To cancel your subscription, please visit your account settings within the app or contact 
                    our support team at support@rateuspro.com to request cancellation.
                  </li>
                  <li>
                    For in-app subscription cancellations, follow the platform-specific steps for your device 
                    (e.g., Apple App Store or Google Play Store).
                  </li>
                </ul>
                
                <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">Refunds:</h3>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    Refunds for any subscription fees are generally not provided unless required by law. 
                    However, you may still cancel at any time to prevent future charges.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Vendor QR Code Services</h2>
                <p className="text-gray-600 mb-3">
                  If you are a vendor (service provider) using Rate Us Pro to create and display QR codes 
                  for customer reviews and ratings:
                </p>
                
                <h3 className="text-lg font-medium text-gray-800 mb-2">Service Cancellations:</h3>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    You may cancel any subscription or service related to QR code creation or other vendor 
                    features at any time.
                  </li>
                  <li>
                    To cancel, please go to your vendor account settings and select the option to terminate 
                    your subscription or contact our support team at support@rateuspro.com.
                  </li>
                </ul>
                
                <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">Refund Policy for Vendors:</h3>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    As with subscription-based services, refunds are generally not offered for cancellations 
                    during an active billing cycle, unless required by law. You will retain access to the 
                    service until the end of the current billing period.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Review and Rating Features</h2>
                
                <h3 className="text-lg font-medium text-gray-800 mb-2">No Cancellations for Reviews:</h3>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    Once a review or rating is submitted by a customer, it cannot be canceled or deleted by 
                    the user. However, if you are a vendor and you believe a review is inappropriate or 
                    violates our guidelines, you can contact us at support@rateuspro.com for review and 
                    possible removal or moderation.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Data Retention After Cancellation</h2>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    When you cancel your subscription, your account data will be retained for 30 days. 
                    After this period, non-essential data may be permanently deleted.
                  </li>
                  <li>
                    Reviews and ratings submitted through your QR codes prior to cancellation will remain 
                    in our system as part of our service record.
                  </li>
                  <li>
                    You may request a data export of your account information prior to cancellation by 
                    contacting support@rateuspro.com.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Billing Cycles and Prorated Refunds</h2>
                <ul className="space-y-2 text-gray-600 pl-6 list-disc">
                  <li>
                    Monthly subscriptions are billed on the same date each month. Annual subscriptions are 
                    billed on the same date each year.
                  </li>
                  <li>
                    We do not offer prorated refunds for partial use of services during a billing cycle.
                  </li>
                  <li>
                    If you upgrade your subscription mid-cycle, the difference will be prorated and charged 
                    immediately.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Changes to This Cancellation Policy</h2>
                <p className="text-gray-600">
                  Rate Us Pro reserves the right to modify or update this Cancellation Policy at any time. 
                  Any changes will be communicated through the App or via email. Please check this policy 
                  periodically to stay informed about any updates.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
                <p className="text-gray-600 mb-3">
                  If you have any questions or need assistance regarding cancellations or refunds, please 
                  contact us at:
                </p>
                <div className="mt-2 text-gray-600">
  <p className="font-medium">Rate Us Pro</p>
  <p>123, MG Road, Indiranagar, Bengaluru, Karnataka, 560038, India</p>
  <p>contact@rateuspro.com</p>
  <p>+91 9822564171</p>
</div>
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

export default CancellationPolicy;