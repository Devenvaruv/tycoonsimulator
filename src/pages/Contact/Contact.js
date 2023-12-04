import React from "react";

const Contact = () => {
    return (
        <div>
            {/* Header */}
            <h1>Contact Us</h1>

            {/* Introduction */}
            <p>
                Thank you for visiting our website. If you have any questions, feedback, or need assistance, please feel free to reach out to us. Our team is always ready to help you with your needs.
            </p>

            {/* General Inquiries or Support */}
            <p>For general inquiries or support:</p>
            <p>Phone: 99999999</p>
            <p>Email: <a href="mailto:fake@gmail.com">fake@gmail.com</a></p>

            {/* Services or Consultation */}
            <p>If you are interested in our services or need a consultation:</p>
            <p>Phone: 88888888</p>
            <p>Email: <a href="mailto:service@example.com">service@example.com</a></p>

            {/* Closing Statement */}
            <p>
                We strive to respond to all inquiries as quickly as possible. Your satisfaction is our priority. We look forward to hearing from you!
            </p>
        </div>
    );
}

export default Contact;
