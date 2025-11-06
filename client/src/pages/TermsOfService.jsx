import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
          Terms of Service
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          These Terms of Service govern your use of <strong>Skillify</strong>. By
          accessing or using our platform, you agree to abide by these terms and our
          Privacy Policy.
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
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using Skillify, you confirm that you have read, understood, and agree to
              comply with these Terms of Service and our Privacy Policy. If you disagree
              with any part, you must discontinue use of our platform.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              2. Permitted Usage
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use Skillify solely for lawful and personal purposes. You may
              not exploit, duplicate, or distribute any part of the platform without
              permission. Attempts to hack, reverse-engineer, or disrupt our services are
              strictly prohibited.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content, branding, designs, and code on Skillify are the intellectual
              property of the Skillify team. Unauthorized use or reproduction may result
              in legal action.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              4. Termination of Access
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate access to Skillify without
              prior notice if we detect misuse, fraudulent activity, or a violation of
              these Terms.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Skillify and its creators are not liable for any direct, indirect, or
              incidental damages arising from your use of the platform. Use Skillify at
              your own discretion and risk.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              6. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For questions or clarifications, contact us at{" "}
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

export default TermsOfService;
