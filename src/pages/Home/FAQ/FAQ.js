import React, { useEffect, useState } from 'react';

const FAQ = () => {
    const [FAQ, setFAQ] = useState([]);
    useEffect(() => {
        fetch('https://milestone-travels-server.vercel.app/faq')
            .then(res => res.json())
            .then(data => setFAQ(data))
    }, []);

    return (
        <div className='mx-3 mb-12 mt-24'>
            <h2 className='text-2xl font-bold text-center mb-12 text-white'>Frequently Asked Questions</h2>
            {
                FAQ.map(question => <div key={question?._id} tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        {question?.question}
                    </div>
                    <div className="collapse-content">
                        <p>{question?.answer}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default FAQ;