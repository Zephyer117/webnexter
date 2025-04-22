'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaCogs, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'Web Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Mobile Development', level: 80 },
    { name: 'Project Management', level: 75 },
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'UI Frameworks', level: 90 },
  ];

  const values = [
    { icon: <FaStar size={24} />, title: 'Excellence', text: 'Striving for pixel-perfect execution and scalable code.' },
    { icon: <FaCogs size={24} />, title: 'Innovation', text: 'We blend creativity with technology for every solution.' },
    { icon: <FaLightbulb size={24} />, title: 'Strategy', text: 'Our approach is data-driven and results-focused.' },
    { icon: <FaHandshake size={24} />, title: 'Trust', text: 'Your success is our success. We grow together.' },
  ];

  return (
    <div className="mt-14 pt-24 pb-20 bg-background text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <h1 className="text-5xl font-bold text-center mb-16 animate-slide-down">About Webnexter</h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/80 shadow-xl animate-slide-left">
            <Image src="/webnexter.png" alt="Webnexter Logo" width={192} height={192} />
          </div>

          <div className="flex-1 text-center md:text-left animate-slide-right">
            <h2 className="text-3xl font-semibold mb-4">Creative Digital Solutions</h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Webnexter is a creative agency delivering modern solutions in web development, social media, video editing, and marketing. From visuals to conversions we turn ideas into growth.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white py-2 px-6 rounded-2xl hover:bg-primary/80 transition duration-300 hover:scale-105 shadow-md"
            >
              Let’s Connect
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Skills</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-secondary/40 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                  />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-primary bg-white shadow
                    ${skill.level >= 90 ? 'animate-pulse' : ''}`}
                    style={{ left: `calc(${skill.level}% - 0.5rem)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-8 text-center">What We Do</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Web Development',
                sub: 'Custom Web Platforms',
                desc: 'We build scalable, SEO-friendly, and performance-optimized websites using React, Next.js, Node, and modern tech.',
              },
              {
                title: 'Video Editing',
                sub: 'From Raw to Wow',
                desc: 'We craft compelling video stories that boost engagement, promote products, and build brands.',
              },
              {
                title: 'Social Media Management',
                sub: 'Digital Presence Experts',
                desc: 'From planning content calendars to executing strategies that grow audiences organically and through ads.',
              },
              {
                title: 'Marketing Strategy',
                sub: 'Growth That Converts',
                desc: 'Smart campaigns that drive traffic and revenue across Facebook Ads, Google Ads, and influencer marketing.',
              },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-secondary rounded-2xl shadow hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-text-light font-medium mb-2">{service.sub}</p>
                <p className="text-text-secondary">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, index) => (
              <div key={index} className="flex items-start gap-4 bg-secondary p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-primary">{val.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{val.title}</h4>
                  <p className="text-text-secondary">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { degree: 'Proven Results', desc: '100+ successful projects across diverse industries.' },
              { degree: 'Creative + Technical Edge', desc: 'Design thinking meets engineering excellence.' },
              { degree: 'Full-Service Expertise', desc: 'Strategy, branding, development all in one place.' },
              { degree: 'Client-Centric Approach', desc: 'Transparent, responsive, and growth-focused.' },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-secondary rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Certifications */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Full-Stack Developers',
                skills: 'Experts in React, Next.js, TailwindCss, Sanity, Wordpress',
                value: 'Build scalable & high-performance applications.',
              },
              {
                name: 'UI/UX Designers',
                skills: 'Figma + Custom Design',
                value: 'Create intuitive, aesthetic, and user-focused designs.',
              },
              {
                name: 'Video Editors',
                skills: 'Adobe Premier Pro, After Effects, Motion Video Editing',
                value: 'Craft impactful brand stories that convert.',
              },
              {
                name: 'Digital Marketers',
                skills: 'SEO, Facebook Ads, Google Ads, Meta Business Suite',
                value: 'Result-driven campaigns that scale fast.',
              },
            ].map((role, index) => (
              <div key={index} className="p-4 bg-secondary rounded-2xl shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{role.name}</h3>
                <p className="text-text-light font-medium mb-1">{role.skills}</p>
                <p className="text-text-secondary">{role.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
