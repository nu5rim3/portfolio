import React from "react";
import Image, { StaticImageData } from "next/image";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="UX/UI Design"
                        icon="/icons/design.svg"
                        description="I create design  products with unique ideas using Figma."
                        projects={7} />
                    <AboutCard
                        title="Web Design"
                        icon="/icons/code.svg"
                        description="I develop Front-End with coding super smooth using React."
                        projects={5} />
                    <AboutCard
                        title="Mobile"
                        icon="/icons/phone.svg"
                        description="I develop cross-platform mobile applications using React Native."
                        projects={3} />
                    <AboutCard
                        title="Deployment"
                        icon="/icons/cloud.svg"
                        description="I deploy application using AWS."
                        projects={3} />
                </div>

                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">I&#39;m Nusri Samath</h1>
                    <h3 className="white">Design is not just what it looks like.<br /> Design is how it works!</h3>
                    <p className="gray">I have proceeded my dream to be a full stack developer as it has been my lifelong ambition. During my 4 years of work as a freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br /><br />
                        I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                {/*  only for mobile
                
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" /> */}
                <MouseParallaxContainer
                    className="parallax"
                    containerStyle={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "auto auto auto auto auto"
                    }}
                    globalFactorX={0.3}
                    globalFactorY={0.3}
                    resetOnLeave
                >
                    <MouseParallaxChild
                        factorX={0.5}
                        factorY={0.5}
                        style={{
                            filter: "invert(1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "auto",
                            height: "100%"
                        }}
                    >
                        <img height="30%" src="/images/partners/aws.svg" alt="aws" />
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.7}
                        factorY={0.5}
                        style={{
                            filter: "invert(1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "auto",
                            height: "100%"
                        }}
                    >
                        <img height="30%" src="/images/partners/node.svg" alt="node" />
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.9}
                        factorY={0.5}
                        style={{
                            filter: "invert(1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "auto",
                            height: "100%"
                        }}
                    >
                        <img height="30%" src="/images/partners/react.svg" alt="react" />
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.7}
                        factorY={0.5}
                        style={{
                            filter: "invert(1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "auto",
                            height: "100%"
                        }}
                    >
                        <img height="30%" src="/images/partners/type.svg" alt="type" />
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        factorX={0.5}
                        factorY={0.5}
                        style={{
                            filter: "invert(1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "auto",
                            height: "100%"
                        }}
                    >
                        <img height="30%" src="/images/partners/python.svg" alt="python" />
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard({ title, icon, description, projects }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <p className="gray">{projects.toString()} projects</p>
        </div>
    )
}