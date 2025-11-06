// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>

//         <p className="mb-4">
//           Welcome to <strong>Skillify</strong>. Your privacy is important to us. This
//           Privacy Policy explains how we collect, use, and protect your personal
//           information.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
//         <p>We collect personal information such as name, email, and resume data you upload.</p>

//         <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of Information</h2>
//         <p>We use your data to provide AI-powered resume features and personalized insights.</p>

//         <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Security</h2>
//         <p>Your data is securely stored and never shared with third parties without consent.</p>

//         <h2 className="text-2xl font-semibold mt-8 mb-2">4. Contact Us</h2>
//         <p>
//           For privacy concerns, reach us at{" "}
//           <a href="mailto:support@skillify.com" className="text-indigo-600 underline">
//             support@skillify.com
//           </a>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800 px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-10 border border-gray-100"
      >
        {/* Header */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-indigo-700"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Welcome to <strong>Skillify</strong> — an AI-powered platform that values your
          privacy and data security. This policy outlines how we handle, protect, and
          respect your personal information.
        </motion.p>

        {/* Sections */}
        <div className="space-y-8">
          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We collect your personal details such as name, email address, and resume
              data you provide. This helps us deliver personalized resume-building
              features and analytics.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your data powers our AI-driven resume tools, career insights, and content
              recommendations. We never sell or misuse your personal information.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              3. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Skillify employs encryption, secure servers, and authentication mechanisms
              to safeguard your data. We also continuously monitor our systems for
              vulnerabilities.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              4. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can request access, correction, or deletion of your personal data at any
              time by contacting our support team.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              5. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or privacy concerns, feel free to reach us at{" "}
              <a
                href="mailto:akashiiitdoc@gmail.com"
                className="text-indigo-700 font-medium underline hover:text-indigo-900 transition-colors"
              >
                akashiiitdoc@gmail.com
              </a>
              .
            </p>
          </motion.section>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-sm text-gray-500 text-center"
        >
          © {new Date().getFullYear()} Skillify. All rights reserved.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
