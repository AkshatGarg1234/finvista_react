import React, { useEffect } from 'react';
import './Hero.css';
import mainLogo from './main.png';

const Hero = () => {
    useEffect(() => {
        const title = document.querySelector('.hero-title');
        const description = document.querySelector('.hero-description');

        // Typewriter effect for title
        const titleText = title.textContent;
        title.textContent = '';
        let i = 0;
        const typeTitle = () => {
            if (i < titleText.length) {
                title.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeTitle, 50); // Faster typing speed (adjust as needed)
            }
        };
        typeTitle();

        // Typewriter effect for description
        const descriptionText = description.textContent;
        description.textContent = '';
        let j = 0;
        const typeDescription = () => {
            if (j < descriptionText.length) {
                description.textContent += descriptionText.charAt(j);
                j++;
                setTimeout(typeDescription, 25); // Faster typing speed (adjust as needed)
            }
        };
        setTimeout(typeDescription, 1500); // Delay the description typing effect
    }, []);
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">"Navigate Your Financial Journey with FInVista: Your Trusted Financial Companion"</h1>
                <p className="hero-description">Discover amazing features and services we offer to enhance your experience.Our platform empowers you to navigate the complexities of finance with confidence. From budgeting to investment strategies, we provide the tools and guidance you need to achieve your financial goals. Join us on your journey towards a brighter financial future</p>
            </div>
            <img src={mainLogo} alt="Hero" style={{ maxWidth: '60%', height: 'auto', maxHeight: '90vh' }} />
        </div>
    );
}

export default Hero;
