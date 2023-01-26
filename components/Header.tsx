import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Full Stack Developer</button>
                    <h1 className="white">Hi!</h1>
                    <h1 className="white">
                        <TypeAnimation
                            // Same String at the start will only be typed once, initially
                            sequence={[
                                `I love to Designer.`,
                                1000,
                                `I love to code.`,
                                1000,
                                `I love to travel.`,
                                1000,
                                `I love to create movies.`,
                                1000,
                            ]}
                            speed={10} // Custom Speed from 1-99 - Default Speed: 40
                            // style={{  }}
                            wrapper="span" // Animation will be rendered as a <span>
                            repeat={Infinity} // Repeat this Animation Sequence infinitely
                        /></h1>
                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <a className="green" href="mailto:nusri.samath@gmail.com">Let&#39;s chat!</a><br/>
                    <a className="green" href="https://drive.google.com/file/d/1KhYUT-Ta-E0x8nVE_Kvs5Z-VeK8Xdqr_/view?usp=share_link">See more</a>
                </div>
                <Image src="/images/nusri.png" width={463} height={513} alt="nusri samath" />
            </div>
        </header>
    )
}