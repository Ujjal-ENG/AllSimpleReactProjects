/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import './overview.css';

const OverviewContent = () => {
    return (
        <div className="container-fluid p-5">
            <div id="overview">
                <h4>Overview</h4>
                <p>
                    <span style={{ fontWeight: 'bolder' }}>*Bonus Feature!*</span> Every student who has taken this course will be entitled to a 15 min free coaching session with the instructor Perçin
                    İmrek.
                </p>
                <p>
                    <span style={{ fontWeight: 'bolder' }}>*Another bonus feature!* </span> There are more than 10 business people from different backgrounds, professions whom I have interviewed on
                    their productivity journey at the last part of our training.
                </p>
                <p>
                    We all have 24 hours. Then what makes the difference between an extremely efficient person and a person who does not reach their full potential?
                    <br />
                    <br />
                    If you are happy being a regular Joe, fine. If not, then it is imperative that you improve yourself day by day, both personally and professionally.
                    <br />
                    <br />
                    This course aims to help you learn productivity strategies and practical methods to be more effective in your life. Both personal and professional life.
                    <br />
                    <br />
                    The instructor of this course, Perçin İmrek, is a famous international speaker, who has published 6 books so far, has given a TED talk, delivered trainings in more than 40
                    countries and visited more than 80 countries. He has his own training firm, Bosphorus Story House, and his own start-up, Natively. With all these, he still spares time for his
                    leisure activities; which are traveling, dancing, singing, and playing games.
                    <br />
                    <br />
                    In this course, Perçin comes to you with a holistic approach, with topics ranging from time management to stress management, from knowing oneself to mindfulness.
                    <br />
                    <br />
                    If you are ready to turn yourself into a more efficient person and increase the quality of your life, this course is for you!
                    <br />
                    <br />
                    Welcome to your new life :)
                </p>
            </div>

            <div id="overview" className="py-4 mt-4">
                <h3>Who this course is for</h3>
                <p>Anyone who is willing to improve themselves in their personal & professional lives.</p>
            </div>
            <div id="overview" className="py-4 mt-4">
                <h3>Requirements</h3>
                <p>Anyone who is interested in improving themselves and making a better version of themselves is welcome to this course.</p>
            </div>
        </div>
    );
};

export default OverviewContent;
