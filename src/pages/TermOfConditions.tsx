import WithMetaTag from '../utils/withMetaTag';

const TermsOfUse = () => {
  return (
    <WithMetaTag
      title="Fusioner: Terms of Use | Your Guide to Safe and Secure Trading"
      desc="Read the terms of use for Fusioner, your trusted cryptocurrency trading platform. Understand your rights and obligations to ensure a safe trading experience."
      keywords="Fusioner, Terms of Use, cryptocurrency trading, user agreement, trading platform terms"
      link="https://fusioner.vercel.app/terms"
    >
      <div className="pt-20 px-4 min-h-screen w-full pb-12 container mx-auto bg-darkPrimary-0 text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Terms of Use
        </h1>

        {/* Introduction */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg text-secondary-0 mb-6">
            Welcome to Fusioner. These Terms of Use govern your use of our platform, services, and products. By accessing or using Fusioner, you agree to be bound by these terms. Please read them carefully.
          </p>
        </section>

        {/* Eligibility */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
          <p className="text-lg text-secondary-0 mb-6">
            You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use Fusioner. By using our platform, you represent and warrant that you meet these eligibility requirements.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          <ul className="list-disc pl-8 text-lg text-secondary-0 mb-6">
            <li className="mb-2">You agree to use Fusioner only for lawful purposes and in accordance with these Terms of Use.</li>
            <li className="mb-2">You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
            <li className="mb-2">You agree not to engage in any conduct that could harm the platform or its users, including but not limited to hacking, phishing, or spamming.</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-lg text-secondary-0 mb-6">
            All content, trademarks, and data on Fusioner, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to Fusioner and are protected from infringement by local and international legislation and treaties. All rights reserved.
          </p>
        </section>

        {/* Disclaimers */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
          <p className="text-lg text-secondary-0 mb-6">
            Fusioner is provided on an "as is" and "as available" basis. We make no warranties or representations of any kind, express or implied, as to the operation of the platform or the information, content, materials, or products included on the platform.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-lg text-secondary-0 mb-6">
            To the fullest extent permitted by law, Fusioner shall not be liable for any damages of any kind arising from the use of our platform, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>
        </section>

        {/* Indemnification */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
          <p className="text-lg text-secondary-0 mb-6">
            You agree to indemnify, defend, and hold harmless Fusioner, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of the platform.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p className="text-lg text-secondary-0 mb-6">
            These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which Fusioner operates, without regard to its conflict of law provisions.
          </p>
        </section>

        {/* Termination */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p className="text-lg text-secondary-0 mb-6">
            Fusioner reserves the right, in its sole discretion, to terminate your access to all or part of the platform, with or without notice, for any reason or no reason at all, including, without limitation, your breach of these Terms of Use.
          </p>
        </section>

        {/* Updates to Terms */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Updates to Terms</h2>
          <p className="text-lg text-secondary-0 mb-6">
            We reserve the right to update or modify these Terms of Use at any time without prior notice. Your continued use of Fusioner after any such changes constitutes your acceptance of the new Terms of Use.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg text-secondary-0 mb-6">
            If you have any questions about these Terms of Use, please contact us at <a href="mailto:support@fusioner.com" className="text-primary-0 hover:text-green-500 transition-colors">support@fusioner.com</a>.
          </p>
        </section>
      </div>
    </WithMetaTag>
  );
};

export default TermsOfUse;
