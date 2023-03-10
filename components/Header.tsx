import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import NavBar from "./NavBar";
import { useRouter } from 'next/router';


export default function Header() {
    const router = useRouter();

    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <h3 className="green">Full Stack Developer</h3>
                    <h1 className="white">Hi!</h1>
                    <h1 className="white">
                        <TypeAnimation
                            // Same String at the start will only be typed once, initially
                            sequence={[
                                `I love to design.`,
                                1000,
                                `I love to code.`,
                                1000,
                                `I love to travel.`,
                                1000,
                                `I love to film.`,
                                1000,
                            ]}
                            speed={10} // Custom Speed from 1-99 - Default Speed: 40
                            // style={{  }}
                            wrapper="span" // Animation will be rendered as a <span>
                            repeat={Infinity} // Repeat this Animation Sequence infinitely
                        /></h1>
                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <button onClick={() => openInNewTab('https://calendly.com/nusrisamath/30min')}>Let&#39;s connect!</button>
                </div>
                <Image src="/images/nusri.png" width={463} height={513} alt="nusri samath" />
            </div>
        </header>
    )
}