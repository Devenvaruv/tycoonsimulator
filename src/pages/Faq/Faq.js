import React, { useState } from 'react';

function Faq() {
    // Dummy FAQ data
    const faqData = [
        {
            question: 'How do I update my profile?',
            answer: 'You can update your profile by going to the settings page and clicking on the "Edit Profile" button.'
        },
        {
            question: 'Where can I check my previous transactions?',
            answer: 'All previous transactions can be viewed in the "Transaction History" section in your account dashboard.'
        },
        {
            question: 'How do I reset my password?',
            answer: 'You can reset your password by clicking on "Forgot Password?" at the login page and following the instructions sent to your email.'
        },
        {
            question: 'Can I play with friends?',
            answer: 'Yes, you can play with friends by inviting them through the "Friends" tab in the game menu.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods including credit cards, PayPal, and cryptocurrency.'
        }
    ];

    // State to keep track of the opened FAQ item
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to handle FAQ item click
    const handleFaqClick = (index) => {
        // If the question is already active, close it, otherwise, open the clicked one
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <ul className="faq-list">
                {faqData.map((faq, index) => (
                    <li key={index} className="faq-item">
                        <button className="faq-question" onClick={() => handleFaqClick(index)}>
                            {faq.question}
                        </button>
                        <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            {activeIndex === index && <p>{faq.answer}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Faq;
