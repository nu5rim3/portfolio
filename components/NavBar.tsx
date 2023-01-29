import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">Nusri Samath</Link>
            </div>

            <ul className="flex white">
                <li className="green">
                    <a href="https://drive.google.com/file/d/1KhYUT-Ta-E0x8nVE_Kvs5Z-VeK8Xdqr_/view?usp=share_link" target="_blank" rel="noopener noreferrer">{"< Resume />"}</a>
                </li>
                <li>
                    <Link href="/#about">About Me.</Link>
                </li>
            </ul>
        </nav>
    )
}