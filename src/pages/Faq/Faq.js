import React, { useState } from 'react';
import './Faq.css'

function Faq() {

    const faqData = [
        {
            question: 'What should I do if the "Rent Determination" option is locked?',
            answer: 'If the "Rent Determination" option is locked, it means you need to purchase a property first. Navigate to the "Property Purchase" section to select and buy a property. Once you own a property, the "Rent Determination" feature will become available.'
        },
        {
            question: 'How do I replay the game?',
            answer: `To replay the game, simply close the window and reopen it. This will refresh the game, allowing you to start from the beginning.`
        },
        {
            question: 'How do I start predicting rental prices?',
            answer: `To begin predicting rental prices, simply enter your desired weekly rate in the 'Weekly Rate For Week' field on the rent Determination. Then, you can advance week-by-week using the 'Move Next Week' button to update your predictions.`
        },
        {
            question: 'Where can I see how my property compares to the market?',
            answer: `The dynamic graph on the dashboard displays your property's rental rate as 'userRent', the competitive rates 'compRent', and the average market rate 'avgRent'. As you input your weekly rates, the graph will populate with this data, allowing you to compare at a glance.`
        },
        {
            question: 'How can I adjust my rental rate based on demand?',
            answer: `Monitor the 'Your Demand', 'Comp Demand', and 'Total Demand' columns in the weekly data table. Based on these figures and the '% Occurrence Loss', you can adjust your weekly rental rate in the input field to optimize your pricing strategy.`
        },
        
        {
            question: `What should I do if there's a significant occurrence loss?`,
            answer: `If you notice a significant '% Occurrence Loss', consider adjusting your rental price to be more competitive. The  graph and demand columns can guide you in finding a rate that might reduce the loss and improve occupancy.`
        }
    ];

    
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to handle FAQ item click
    const handleFaqClick = (index) => {
        // If the question is already active, close it, otherwise, open the clicked one
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {/* FAQ Section Header */}
            <h1 style={{color: '#00543C'}}>How Can We Help You?</h1>

            {/* FAQ List */}
            <ul className="faq-list">
                {faqData.map((faq, index) => (
                    <li key={index} className="faq-item">
                        
                        {/* FAQ Question Button */}
                        <button className="faq-question" onClick={() => handleFaqClick(index)}>
                            {faq.question}
                        </button>

                        {/* FAQ Answer */}
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
