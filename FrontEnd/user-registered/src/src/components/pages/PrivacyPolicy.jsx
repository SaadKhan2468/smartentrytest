import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
                <h1 className="text-2xl font-semibold text-gray-800">Privacy Policy</h1>
                <p className="text-gray-500 text-sm mt-1">Last updated on January 30, 2025</p>
                <p className="mt-4 text-gray-700">
                    At Smart Entry Test Proctor, we value your privacy and ensure that your personal information is protected.
                    This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">1. Information We Collect</h2>
                    <ul className="list-disc ml-5 text-gray-700 mt-2">
                        <li>Your name, email, and contact details when you register.</li>
                        <li>Exam-related data, including test logs and proctoring recordings.</li>
                        <li>Device and browser information for security purposes.</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">2. How We Use Your Information</h2>
                    <ul className="list-disc ml-5 text-gray-700 mt-2">
                        <li>To verify your identity and ensure exam integrity.</li>
                        <li>To improve system security and user experience.</li>
                        <li>To communicate important updates and support.</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">3. Data Protection</h2>
                    <ul className="list-disc ml-5 text-gray-700 mt-2">
                        <li>We use encryption to keep your data secure.</li>
                        <li>Only authorized personnel can access your information.</li>
                        <li>We do not share your data with third parties without your consent.</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">4. Your Rights</h2>
                    <ul className="list-disc ml-5 text-gray-700 mt-2">
                        <li>You can update or delete your account information.</li>
                        <li>You can request a copy of your data.</li>
                        <li>You can contact us for any privacy-related concerns.</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">5. Contact Us</h2>
                    <p className="text-gray-700 mt-2">
                        If you have any questions about our Privacy Policy, feel free to contact us at
                        <a href="mailto:support@smartproctor.com" className="text-blue-500"> support@smartproctor.com</a>.
                    </p>
                    <p className="text-gray-700 mt-2">By using our system, you agree to this Privacy Policy.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;