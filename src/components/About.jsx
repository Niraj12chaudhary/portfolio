import React from "react";
import { Briefcase, BookOpen, Code, Award, Target } from "lucide-react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        About Me
      </h1>

      {/* Summary */}
      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <Code className="text-green-600" />
          <h2 className="text-2xl font-semibold text-green-700">Summary</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          I’m Shivam Kumar Chaudhary, a passionate Software Developer with a
          background in full-stack development, cloud-native engineering, and
          scalable system design. With a B.Tech in Computer Science &
          Engineering, I’ve built and deployed real-world applications that
          integrate technologies like Django, NestJS, React, Flutter, Kafka,
          PostgreSQL, and Docker. I specialize in creating high-performance
          solutions that are clean, modular, and user-centric—driven by a strong
          commitment to continuous learning and innovation.
        </p>
      </section>

      {/* Education */}
      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <BookOpen className="text-green-600" />
          <h2 className="text-2xl font-semibold text-green-700">Education</h2>
        </div>
        <p className="text-gray-700">
          <strong>B.Tech in Computer Science & Engineering</strong> <br />
          Darbhanga College of Engineering (2020–2024) <br />
          CGPA: 7.97
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <Code className="text-green-600" />
          <h2 className="text-2xl font-semibold text-green-700">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <strong>Frontend:</strong> React, Flutter, JavaScript, HTML, CSS
          </div>
          <div>
            <strong>Backend:</strong> Django, Node.js, NestJS, TypeScript, Kafka
          </div>
          <div>
            <strong>Databases:</strong> PostgreSQL, Redis, SQLite
          </div>
          <div>
            <strong>DevOps & Tools:</strong> Docker, GCP, Git, Grafana, Datadog
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <Briefcase className="text-green-600" />
          <h2 className="text-2xl font-semibold text-green-700">Experience</h2>
        </div>
        <div className="space-y-6 text-gray-700">
          <div>
            <strong>
              Software Developer | Sarva Suvidhaen Pvt Ltd (Oct 2024 – Present)
            </strong>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Designed and deployed a Kafka-based real-time notification
                service using NestJS and TypeScript.
              </li>
              <li>
                Led the development of a GPS-enabled attendance tracking app
                using Flutter with background location services.
              </li>
              <li>
                Engineered scalable and secure APIs for RailOps, a workforce
                monitoring and feedback platform.
              </li>
            </ul>
          </div>
          <div>
            <strong>
              SDE Intern | Sarva Suvidhaen Pvt Ltd (June 2024 – Sep 2024)
            </strong>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Improved frontend UX of RWMS and RailOps through responsive
                layouts and form validations.
              </li>
              <li>
                Built role-based access modules, real-time alerts, and optimized
                backend logic for production readiness.
              </li>
              <li>
                Supported app deployments that reached over 600 combined
                downloads on the Play Store.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <Code className="text-green-600" />
          <h2 className="text-2xl font-semibold text-green-700">Projects</h2>
        </div>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <strong>CareerSpot:</strong> A cross-platform job application app
            built with Flutter and Python. Features include "Hiring of the
            Week," real-time contest updates via web scraping, and a clean UI
            focused on job-seeker engagement.
          </li>
          <li>
            <strong>Railway Management API:</strong> Developed a secure REST API
            using Django REST Framework with role-based access and atomic
            booking logic to handle concurrent seat reservations efficiently.
          </li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <Award className="text-green-600" />
          <h2 className="text-2xl font-semibold text-green-700">
            Achievements
          </h2>
        </div>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Global Rank 834 in CodeChef Long Challenge – Jan 2023</li>
          <li>
            Completed Google Cloud Learn-to-Earn Challenge on Cloud Security and
            Data
          </li>
          <li>Earned NPTEL Certification in "Joy of Computing with Python"</li>
        </ul>
      </section>

      {/* Mission */}
      <section className="bg-white shadow-xl rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-4">
          <Target className="text-green-600" />
          <h2 className="text-2xl font-semibold text-green-700">
            Mission Statement
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          My mission is to build scalable, impactful software that drives
          digital transformation and improves lives. I'm committed to growing as
          an engineer by solving meaningful problems, collaborating with driven
          teams, and delivering clean, reliable code that matters.
        </p>
      </section>
    </div>
  );
}

export default About;
