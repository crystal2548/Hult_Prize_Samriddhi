import React, { useState } from 'react';
import './styles/faq.css';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Hult Prize?",
      answer: "Hult Prize is the world's largest student competition for social entrepreneurship. It challenges students to solve pressing global issues through sustainable business solutions. Since 2010, over 1 million students from 100+ countries have participated, competing for $1 million in seed funding."
    },
    {
      question: "How can I participate in Hult Prize at Samriddhi College?",
      answer: "To participate, form a team of 1-4 members, attend our information sessions, and register for the On-Campus program. Keep an eye on our social media and website for registration dates and deadlines. You can also contact our organizing committee for more information."
    },
    {
      question: "Do I need prior business or entrepreneurship experience?",
      answer: "No prior experience is required! Hult Prize welcomes students from all academic backgrounds. We provide mentorship, workshops, and resources to help you develop your ideas. Your passion for creating social impact is more important than previous experience."
    },
    {
      question: "What is the competition timeline?",
      answer: "The competition typically runs from September to August of the following year. It starts with On-Campus competitions, followed by Regional Summits, and culminates in the Global Finals. At Samriddhi College, our On-Campus event usually takes place in late fall or early winter."
    },
    {
      question: "Can I participate individually or do I need a team?",
      answer: "While you can register individually, you'll need to form a team of 1-4 members to compete. Teams can be formed before or after registration. We also facilitate team formation during our initial workshops for individuals looking for team members."
    },
    {
      question: "What kind of ideas are accepted?",
      answer: "We're looking for innovative, sustainable business solutions that address the annual Hult Prize challenge theme. Ideas should be scalable, sustainable, and have measurable social impact. Past themes have included food security, youth unemployment, and climate action."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, participation in the Hult Prize at Samriddhi College is completely free. There are no registration fees, and we provide all necessary resources, mentorship, and support throughout the competition."
    },
    {
      question: "What support do participants receive?",
      answer: "Participants receive comprehensive support including mentorship from experienced entrepreneurs and faculty, workshops on business model development and pitching, access to resources and research materials, networking opportunities with judges and sponsors, and guidance throughout the competition process."
    },
    {
      question: "What happens if we win the On-Campus competition?",
      answer: "Winning teams advance to Regional Summits where they compete against winners from other universities. Regional winners then proceed to the Global Accelerator, and ultimately compete at the Global Finals for $1 million in seed funding to launch their startup."
    },
    {
      question: "Can students from other colleges participate?",
      answer: "The On-Campus program at Samriddhi College is primarily for our students. However, students from other institutions can participate in the global Hult Prize through their own campus programs or directly through the online platform."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <div className="faq-hero">
        <div className="faq-hero-content">
          <p className="faq-hero-label animate-fade-in-down">Got Questions?</p>
          <h1 className="faq-hero-title animate-fade-in-up animate-delay-200">FAQ</h1>
          <p className="faq-hero-subtitle animate-fade-in-up animate-delay-400">
            Everything you need to know about Hult Prize at Samriddhi College
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question-btn"
              >
                <span className="faq-question">{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="faq-cta">
          <h3 className="faq-cta-title">Still Have Questions?</h3>
          <p className="faq-cta-text">
            Can't find the answer you're looking for? Feel free to reach out to us directly.
          </p>
          <Link to="/contact" className="faq-cta-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;