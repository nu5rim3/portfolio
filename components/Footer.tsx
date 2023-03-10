import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Nu5rim3</Link> - All rights reserved.</span>
            <ul className="flex">
                 <li>
                    <a href="https://linktr.ee/nusrisamath?utm_source=linktree_profile_share&ltsid=5ebc90f4-c5d9-4860-8c94-128a2707493a" target="_blank" rel="noreferrer">
                        <Image src="/icons/linktree.svg" width={24} height={24} alt="youtube-icon" />
                    </a>
                </li>
                {/* <li>
                    <a href="https://www.facebook.com/nsamath" target="_blank" rel="noreferrer">
                        <Image src="/icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/nu5rim3" target="_blank" rel="noreferrer">
                        <Image src="/icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nusri-samath/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nu5rim3" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li> */}
            </ul>
        </footer>
    )
}