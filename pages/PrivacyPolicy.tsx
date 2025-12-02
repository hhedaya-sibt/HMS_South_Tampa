import React from 'react';
import Section from '../components/ui/Section';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="pt-12">
      <Section bg="white" className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Privacy Policy & Terms</h1>
        <p className="text-stone-500 mb-12">Last updated: {currentDate}</p>

        <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-brand-navy prose-a:text-brand-sage">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <h2>Interpretation and Definitions</h2>
          
          <h3>Interpretation</h3>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

          <h3>Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. Under GDPR, You can be referred to as the Data Subject or User.</li>
            <li><strong>Company</strong> ("the Company", "We", "Us" or "Our") refers to Home Owners Maintenance Services, Inc., 5201 W Kennedy Blvd, Suite 510, Tampa, FL 33609. For GDPR purposes, the Company is the Data Controller.</li>
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
            <li><strong>Account</strong> means a unique account created for You to access our Service.</li>
            <li><strong>Website</strong> refers to HMS South Tampa, accessible from hmssouthtampa.com.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Country</strong> refers to: Florida, United States.</li>
            <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. For GDPR purposes, Service Providers are considered Data Processors.</li>
            <li><strong>Third-party Social Media Service</strong> refers to any site or network through which a User can log in or create an account to use the Service.</li>
            <li><strong>Personal Data</strong> means any information that relates to an identified or identifiable individual.</li>
            <li><strong>Cookies</strong> are small files placed on Your device by a website, storing browsing history.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, cellphone, or digital tablet.</li>
            <li><strong>Usage Data</strong> is data collected automatically from the use of the Service.</li>
            <li><strong>Data Controller</strong> means the Company that determines the purposes and means of the processing of Personal Data under GDPR.</li>
            <li><strong>Do Not Track (DNT)</strong> is a concept promoted to allow users to control online tracking.</li>
            <li><strong>Business</strong> (under CCPA) refers to the Company as the legal entity that collects and processes consumer information.</li>
            <li><strong>Consumer</strong> (under CCPA) means a California resident.</li>
            <li><strong>Sale</strong> (under CCPA) means transferring personal information to another business or third party for valuable consideration.</li>
          </ul>

          <h2>Collecting and Using Your Personal Data</h2>
          
          <h3>Types of Data Collected</h3>
          
          <h4>Personal Data</h4>
          <p>We may ask You to provide:</p>
          <ul>
            <li>Email address</li>
            <li>First and last name</li>
            <li>Phone number</li>
            <li>Address, State, ZIP/Postal code, City</li>
          </ul>

          <h4>Usage Data</h4>
          <p>May include IP address, browser type and version, pages visited, time/date/duration, mobile device type and identifiers, and diagnostic and interaction data.</p>

          <h3>Tracking Technologies and Cookies</h3>
          <p>We use Session Cookies (deleted after browser close) and Persistent Cookies (remain after browser close).</p>
          <p>Types and Purpose:</p>
          <ul>
            <li><strong>Necessary Cookies:</strong> Enable core functionality</li>
            <li><strong>Cookies Policy Acceptance Cookies:</strong> Track consent</li>
            <li><strong>Functionality Cookies:</strong> Remember preferences</li>
            <li><strong>Tracking/Performance Cookies:</strong> Analytics and ad testing (via 3rd parties)</li>
          </ul>

          <h2>Use of Your Personal Data</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide and maintain services</li>
            <li>Manage account and registration</li>
            <li>Fulfill contracts</li>
            <li>Contact you (email, SMS, notifications)</li>
            <li>Send offers and similar service info</li>
            <li>Manage user requests</li>
          </ul>

          <h2>Retention of Your Personal Data</h2>
          <p>Retained only as long as needed. Usage data may be retained longer for legal or functional reasons.</p>

          <h2>Transfer of Your Personal Data</h2>
          <p>May occur to other jurisdictions. Secured using commercially acceptable means.</p>

          <h2>Disclosure of Your Personal Data</h2>
          <p><strong>Business Transfers:</strong> With notice if part of acquisition/merger</p>
          <p><strong>Legal Requirements:</strong> To comply with law or protect public/user safety or rights</p>

          <h2>Security of Your Personal Data</h2>
          <p>Best efforts used but no method is 100% secure.</p>

          <h2>SMS Marketing and Text Messaging</h2>
          <p><strong>Opt-In:</strong> You opt in to receive text messages by providing your phone number and checking the consent box on our contact form.</p>
          <p><strong>Opt-Out:</strong> You may opt out at any time by replying STOP to any message.</p>
          <p><strong>Help:</strong> Reply HELP to any message for assistance, or call us at (813) 725-5705 or fill out the contact form on our website.</p>
          <p><strong>Message Frequency:</strong> Message frequency varies based on your inquiry and service status.</p>
          <p><strong>Message and Data Rates:</strong> Standard message and data rates may apply depending on your carrier.</p>
          <p><strong>Information Collected:</strong> We may collect your phone number, carrier name, and the date, time, and content of messages.</p>
          <p><strong>Carriers:</strong> Carriers are not liable for delayed or undelivered messages.</p>

          <h2>Third-Party Service Providers</h2>
          <p><strong>Analytics:</strong> We may use Google Analytics (tracks, reports usage, shares within Google Ads network). Opt-out via Google browser add-on.</p>
          <p><strong>Email Marketing:</strong> Opt-out via unsubscribe link in any email or by calling us.</p>

          <h2>GDPR Privacy Rights</h2>
          <p>You have the right to access/update/delete your data, request correction, object to processing (especially for marketing), request data transfer, and withdraw consent.</p>

          <h2>CCPA Privacy Rights</h2>
          <p>You have the right to be notified of data collection, request access to collected data, request deletion of data, know categories/sources/purpose of data use, opt-out of data sale, and be free from discrimination for exercising these rights.</p>

          <h2>Do Not Sell My Personal Information</h2>
          <p>We do not sell personal information. Opt-out via cookie consent banner, "Do Not Sell My Info" link/banner, or mobile device settings.</p>

          <h2>Children's Privacy</h2>
          <p>We do not knowingly collect data from those under 13.</p>

          <h2>California Shine the Light Law</h2>
          <p>California residents may request info about data shared for marketing once per year.</p>

          <h2>Links to Other Sites</h2>
          <p>We are not responsible for external content or policies.</p>

          <h2>Changes to this Policy</h2>
          <p>We will update this page with any changes and notify you by email or prominent site notice.</p>

          <h2>Contact Us</h2>
          <p>
            <strong>Phone:</strong> (813) 725-5705<br />
            <strong>Text/SMS:</strong> (813) 725-5705<br />
            <strong>Website:</strong> hmssouthtampa.com
          </p>
          <p>Or fill out the contact form on our homepage.</p>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;