import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Arise Medical Academy",
  description:
    "Privacy Policy and Terms of Use for Arise Medical Academy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Privacy Policy
          </h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Who We Are
          </h2>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              <strong>Website:</strong>{" "}
              <Link
                href="https://arisekerala.com"
                className="text-blue-600 hover:underline"
                target="_blank"
              ></Link>
              https://arisekerala.com
            </p>
            <p className="">TERMS AND CONDITIONS</p>
            <p>
              Please read the following terms and conditions of use (“Terms of
              Use”) of the services (as defined in Clause 2.1 below) made
              available on{" "}
              <Link
                href="https://www.arisemedicalacademy.com"
                className="text-[#0170b9]"
              >
                arisemedicalacademy.com
              </Link>{" "}
              or the equivalent Arise Medical Academy Mobile Application
              available on Google Play, Windows Store or Apple Store (“Arise
              Medical Academy App”/ “Website”). The Arise Medical Academy App or
              Website on which the Services are availed may together be referred
              to for convenience as the “Platform”.
            </p>
            <p>
              For the purpose of these Terms of Use, wherever the context so{" "}
              <br />
              requires “Your”, “You” or “User” shall mean any natural or legal
              person who browses the Platform or has agreed to become a
              subscriber to the Services on the Platform by providing login
              credentials while registering on our Platform as a Subscribed User
              (defined below). The term “We”, “Us”, “Our” shall mean Arise
              Medical Academy.
            </p>

            <p>
              When You use the Platform, You will be subject to these Terms of
              Use. We may update these Terms of Use from time to time and will
              endeavour to notify You of such changes at the earliest. Please
              ensure You read our Terms of Use and any updated version thereof
              before proceeding to use the Platform or the Services, as the case
              maybe.
            </p>

            {/* Terms */}
            <h2 className="text-xl font-semibold text-gray-900">
              Acceptance of Terms
            </h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                These Terms of Use set forth a legally binding contract between
                Us and You, the user. By using the Platform, You agree to be
                bound by all the conditions stated herein. Even if You only
                visit the Website or review any of the service offerings made
                available by Us, You will be bound by these Terms of Use. If You
                do not accept these Terms of Use, You must not use the Website
                or the Platform.
              </li>

              <li>
                In consideration of your use of the Website and App, You agree:
                <ol className="list-decimal list-inside ml-6 mt-3 space-y-2">
                  <li>
                    To provide true, accurate, current and complete information
                    about yourself complying with Clause 2 of these Terms and
                    Conditions and as prompted in order to generate login
                    credentials;
                  </li>
                  <li>
                    To ensure that You meet the required qualification while
                    opting for the Paid Account (defined hereunder);
                  </li>
                  <li>
                    To maintain and promptly update your login credentials to
                    keep them true, accurate, current and complete;
                  </li>
                  <li>
                    To acknowledge that Arise Medical Academy is not responsible
                    for ensuring that You conform to the eligibility criteria;
                  </li>
                  <li>
                    To seek consent of Your parents or legal guardians before
                    providing any information about Yourself or Your family
                    members on the Arise Medical Academy App;
                  </li>
                  <li>
                    That We are not responsible for any consequences arising
                    from misuse of the Arise Medical Academy App or any of Our
                    Services.
                  </li>
                </ol>
              </li>
            </ol>

            <ol className="list-decimal list-inside ml-6 mt-3 space-y-2">
              <li>
                If You provide any information that is untrue, inaccurate, not
                current or incomplete, or we have reasonable grounds to suspect
                that such information is untrue, inaccurate, not current or
                incomplete, We reserve the right to suspend or terminate your
                account and refuse any and all current or future use of the
                Platform.
              </li>
              <li>
                This document is an electronic record in terms of the
                Information Technology Act, 2000 (“IT Act”), the rules
                thereunder as applicable, and the provisions pertaining to
                electronic records in various statutes as amended by the IT Act.
                This electronic record is generated by a computer system and
                does not require any physical or digital signatures.
              </li>
              <li>
                You may access the Website or subscribe to the Services only for
                Your personal use. The Platform as a whole, is owned exclusively
                by Arise Medical Academy. You acknowledge that Arise Medical
                Academy is providing You with a revocable, limited,
                non-exclusive, and non-transferable license to use the features
                of the Website and the App. You will upon logging into the
                Website as a regular user be entitled to view Our limited free
                content as a demo offerings. You will get access to once You
                enrol as a Subscriber. You are advised to review this free
                content before taking the decision to proceed to subscribe to
                the Services as a Subscribed User as defined in clause 1.7.
              </li>
              <li>
                By registering Your e-mail address and/or phone number with Us,
                You consent to be contacted by Us via phone calls, SMS
                notifications, and/or e-mails, in case of any subscription or
                Service updates.
              </li>
              <li>
                You are entirely responsible for maintaining the security and
                confidentiality of Your account as well as the login credentials
                to the account once you become a Subscribed User.
              </li>
              <li>
                We will not be liable for any loss that You may incur because of
                someone else using Your account, either with or without Your
                knowledge. You may be held liable for any losses incurred by Us
                or another party due to someone else using Your account.
              </li>
              <li>
                Due to the global nature of the Internet, You agree to comply
                with all applicable local laws, state specific laws, and
                regulation rules regarding use of the Website. Specifically, You
                agree to comply with all applicable laws regarding the
                transmission of technical data and information, exported from
                India or the country in which You reside.
              </li>
            </ol>

            {/* Eligibility */}
            <p className="text-xl font-semibold text-gray-900">
              8. Eligibility
            </p>
            <ol className="list-decimal list-inside ml-6 mt-3 space-y-2">
              <li>
                Persons who are “competent/capable” of contracting within the
                meaning of the Indian Contract Act, 1872 shall be eligible to
                register for Arise Medical Academy App and be a Registered User
                (defined hereunder). Persons who are minors are not eligible to
                register for Our Services. As a minor if You wish to use the
                Arise Medical Academy App or Our Services, such use shall be
                made available to You by Your legal guardian or parents, who has
                agreed to these Terms. In the event a minor utilizes the Arise
                Medical Academy App/Website/Services, it is assumed that he/she
                has obtained the consent of the legal guardian or parents and
                such use is made available by the legal guardian or parents…
              </li>
              <li>
                To register on the Platform for availing the Services (as
                defined in Clause 3.1 below) on an account login based paid
                subscription (“Subscriber”/ “Subscribed User”), You will be
                mandatorily required to either be a student (Complying with
                Clause 2.1) of modern medicine currently enrolled in a medical
                college recognized in India or a qualified medical professional
                registered with the Medical Council of India. To be eligible to
                become a Subscriber or Subscribed User, You will be required to
                give details to validate your eligibility by filling in all
                mandatory fields in the online Service subscription enrolment
                form. Subsequent to You completing all fields in the Service
                subscription form, you will have access to the free content or
                the Basic Plan in the capacity of Registered User and have the
                option to purchase a paid subscription of your choice. If You
                choose to purchase a paid subscription, You will be directed to
                the purchase page and select the Services and duration for which
                You wish to become a Subscribed User. Post registration, only
                once the payment has been received by Arise Medical Academy in
                full, will You attain the status of a Subscribed User or as Paid
                User. After the payment is complete, You will receive a
                confirmation email to the registered email id confirming your
                plan details and credentials for accessing the Platform.
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-900">
              Services of Arise Medical Academy
            </h2>
            <ol className="list-decimal list-inside ml-6 mt-3 space-y-2">
              <li>
                To avail the full range of course content offered as part of the
                Services, You will have to mandatorily be a Subscribed User
                meeting all the requirements set out in Clause 2.2 The Services
                and amounts payable to access the Services may differ for
                different Subscribed Users and will be based on the course
                combination chosen by You either at the time of enrolling as a
                Subscribed User or thereafter based on the courses a Subscribed
                User adds through his/ her account. In these Terms of Use, the
                term “Services” shall mean and include without limitation, the
                online tutorial videos and content as well as study materials
                that will be accessible to You as a Subscribed User and will
                exclude the free demo content that is accessible to all
                Registered Users visiting the Platform. The foregoing meaning
                and scope of Services may be subject to change and the
                definition shall not in any way limit or restrict Our right to
                remove or add features to the Platform.
              </li>
              <li>
                As a “Registered User”, You are enrolled to the free plan by
                default and have the option to purchase a Paid Services Account
                (“Paid Account”) and become a Subscribed User. The benefits and
                features available under the Basic Plan and the Paid Account is
                available for your reference at
                https://www.arisemedicalacademy.com/home/ If You have initially
                enrolled in the Basic Plan, You will have the option of
                upgrading the Service account to a Paid Account at any time by
                clicking on the “Subscribe” link or icon available as part of
                the Subscribed User account dashboard once the You log into Your
                Service account.
              </li>
              <li>
                You agree that any Services provided by Arise Medical Academy
                may be subject to change at the discretion of Arise Medical
                Academy and Arise Medical Academy may add, remove or modify
                offerings to its existing scope of Services at such fees as will
                be solely determined by Arise Medical Academy.
              </li>
              <li>
                Arise Medical Academy may at its discretion revise the amount
                payable in respect of existing offerings forming part of the
                Services that may be made available to You.
              </li>
              <li>
                You agree that Arise Medical Academy may at any time and for any
                reason, terminate Your access to whole or part of the Platform,
                or restrict or suspend Your access to your Subscribed User
                account, for any or no reason, with or without prior notice, and
                without any liability to You.
              </li>
            </ol>
            <h2 className="text-xl font-semibold text-gray-900">
              Subscriber Account, Password and Security
            </h2>
            <p>
              1. If You use the Platform and wish to avail Services by creating
              a User account, You may be required to submit your phone number
              and/or email ID and choose a password which will be the only set
              of credentials basis which You will be granted access to the
              Platform and its Services. You are responsible for maintaining the
              confidentiality of Your password and other credentials to access
              the Services. If there is any compromise to Your account, You can
              change your password using the ‘forgot password’ functionality
              available on the login page used to access the Platform.
            </p>
            <p>
              <strong>Third Parties</strong>
            </p>
            <p>
              1. We may use/integrate another third party’s platform on Our
              Website or the Arise Medical Academy App. We may also use third
              party platforms to provide services to ourselves. In such event,
              You will be bound by such third party’s terms and conditions,
              privacy policy, and any other applicable policies. You also agree
              and hereby authorize Arise Medical Academy to share Your details
              and personal information with such third parties to the extent
              necessary for Arise Medical Academy to deliver the Services to
              You.
            </p>
            <p>
              <strong>Payment Terms</strong>
            </p>
            <p>
              Any payments made to Arise Medical Academy in respect of Services
              are subject to the payment terms of Arise Medical Academy as will
              be notified to You once You initiate the process to become a
              Subscribed User.
            </p>
            <p>
              The Fee including GST and any delivery charges payable in relation
              to delivery of hard copy or electronic versions of document based
              Study materials, if applicable, will be shown prior to completion
              of the online payment transaction.
            </p>
            <p>
              In the unlikely event that, due to a technical error, the amount
              of the Fee displayed on the Platform is incorrect, Arise Medical
              Academy will notify You as soon as it reasonably can. If the
              correct amount of the Fee is higher than the amount displayed on
              the Platform, Arise Medical Academy will contact You through your
              registered e-mail address and/or phone number to notify You of the
              correct Fee. To avail all Services for the duration of
              Subscription, You may be required to remit any additional fees
              such that the correct Fee is paid by you.
            </p>
            <p>
              Arise Medical Academy hereby notifies You that Arise Medical
              Academy uses third party payment gateway service providers to
              process payment made by You towards the Service subscription. It
              is hereby clarified that Arise Medical Academy will not be
              responsible for any payment failures or errors occurring due to
              technical issues at the bank’s end or issues arising from the
              third payment gateway and all such issues should be resolved
              directly between You and the banking or payment gateway partner
              concerned.
            </p>
            <p>
              The provision of the online tutorials forming part of the Services
              are contingent upon Arise Medical Academy having received cleared
              funds from You in respect of the Fee for the relevant Service
              subscription. Without prejudice to Arise Medical Academy’s rights
              and remedies under these Terms of Use, if any sum payable is not
              paid on or before the due date, Arise Medical Academy reserves the
              right, forthwith and at Arise Medical Academy’s sole discretion,
              to suspend Your access to the Services and refuse You entry to the
              course You intended to avail as part of the subscription to the
              Platform.
            </p>

            <p>
              <strong>Cancellation and Refund</strong>
            </p>
            <p>
              1. Thank you for buying our courses. We ensure that our users have
              a rewarding experience while they discover, assess, and purchase
              our courses, whether it may be instructor-led or self-paced
              training or classroom training. As with any online purchase
              experience, there are terms and conditions that govern the Refund
              Policy. When you subscribe to a batch / test series or course, you
              agree to our Privacy Policy, Terms of Use and refund policy. Our
              cancellation and refund policy is as follows: Please note that
              Services once subscribed cannot be cancelled and no refund to that
              effect can be made. Notwithstanding the foregoing, Arise Medical
              Academy can terminate Your subscription anytime and the decision
              to provide a refund is at Arise Medical Academy’s sole discretion.
              Further, Arise Medical Academy can change the pricing, duration,
              upgrade, or refund policy any time, without any prior
              notification.
              <br />
              Refunds: Duplicate payment Refund of the duplicate payment made by
              the delegate will be processed via the same source (original
              method of payment) in 7 to 10 working days post intimation by the
              customer.
              <br />
              <strong>
                Note: All duplicate payment refunds will be processed within
                7-10 working days after the refund request is approved by Arise
                Medical Academy.
              </strong>
            </p>

            <p>
              <strong>Shipping and Delivery</strong>
            </p>
            <p>
              The following conditions are applicable for shipping within India
              and we do not support international shipping. No Free shipping
              unless otherwise stated during an offering on the website.
              Shipping charges as applicable shall either be there on the site
              or intimated to the customer if required at the time of placement
              of order. Delivery Time: 9:00 AM – 5:00 PM (IST) during Business
              Days i.e., Monday to Friday only, We appreciate our customers
              buying during Holidays, and we make all efforts to ship the goods
              during Holidays, but we do not guarantee shipping or deliveries
              during public holidays. Express shipping charges would be
              additional and free shipping would not be applicable for Express
              shipping requests. Request our customers to plan their shopping &
              delivery in advance to avoid delays.
            </p>

            <p>
              <strong>Disclaimer as regards Study materials</strong>
            </p>
            <p>
              The term “Study Materials”as used in these Terms of Use include
              the videos, question bank, test series and any other learning
              material posted for the specific topics as well as other hard copy
              or electronic materials that maybe made available from time to
              time. Sometimes soft copy document versions of the video lectures
              maybe provided to a Subscribed User basis Arise Medical Academy’s
              sole assessment as regards the need for such material. Where soft
              copy Study Materials accompany the Services, these study materials
              will be made available to You, upon meeting all the conditions
              stipulated in these Terms of Use and You becoming a Subscribed
              User.
            </p>
            <p>
              Arise Medical Academy does not make any representation, guarantee
              or commitment to You that the Study Materials offered either in
              the demo versions or as part of subscribed Services will be error
              free.
            </p>
            <p>
              The Services and all accompanying Study materials are only offered
              purely on “AS IS” basis and Arise Medical Academy expressly states
              that the Study Material and the Services are not intended to act
              as a substitute for professional medical opinion on ailments.
            </p>
            <p>
              Arise Medical Academy do not claim any guaranteed rank, mark or
              success with the use of ” Arise Medical Academy ” platform.
            </p>

            <p>
              <strong>Online Subscription and Access Terms</strong>
            </p>
            <p>
              Except as set out in the description of the subscription model
              available on the Platform, no additional study materials and/or
              video tutorials will be provided by Arise Medical Academy.
            </p>
            <p>
              Upon receipt of a confirmation e-mail from Arise Medical Academy
              you will be notified when You (only as a Subscribed User) have
              access to purchased Services and for the length of time such
              access will be made available to You, subject however to Arise
              Medical Academy’s absolute right to suspend or terminate access in
              accordance with these Terms of Use.
            </p>
            <p>
              A subscription received is personal to You and You shall not
              transfer or share your right to access the Study Material or
              further sell the subscription or allow access to the subscription
              to any other person for consideration or otherwise.
            </p>

            <p>
              <strong>System Requirements</strong>
            </p>

            <p>
              Please note that it is Your responsibility to check that the
              computer or device You plan to use to access the subscription is
              compatible with the minimum specification requirement that relates
              to the subscription You are opting for. You acknowledge and accept
              that Arise Medical Academy cannot be held responsible for any
              technical problems (including but not limited to playback of video
              content) with any systems, computers or devices You encounter
              following the commencement of the subscription.
            </p>

            <p>
              📧 Email:{" "}
              <a
                href="mailto:support@arisemedicalacademy.com"
                className="text-blue-600 hover:underline"
              >
                support@arisemedicalacademy.com
              </a>
              <br />
              📞 Phone: +91 76809 29292
              <br />
              📍 Address: 2nd Floor, Langar House Rd, Hyderabad, Telangana –
              500008
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Arise Medical Academy. All rights
            reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
