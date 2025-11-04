// ClassicEleganceTemplate.jsx
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ClassicEleganceTemplate = ({ resumeData }) => {
  const {
    name,
    title,
    about,
    contact,
    education,
    experience,
    skills,
    projects,
  } = resumeData;

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-serif flex flex-col items-center py-10">
      {/* Header */}
      <header className="text-center border-b border-gray-300 pb-4 w-4/5">
        <h1 className="text-4xl font-bold tracking-wide">{name}</h1>
        <p className="text-lg italic text-gray-600">{title}</p>
      </header>

      {/* Body */}
      <main className="flex flex-col md:flex-row w-4/5 mt-6 gap-6">
        {/* Left Column */}
        <aside className="md:w-1/3 border-r border-gray-300 pr-6 flex flex-col gap-6">
          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-2">
              Contact
            </h2>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2">
                <Mail size={16} /> {contact?.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> {contact?.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> {contact?.address}
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} /> {contact?.linkedin}
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} /> {contact?.github}
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-2">
              Skills
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {skills?.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-2">
              Education
            </h2>
            <div className="text-sm text-gray-700 space-y-2">
              {education?.map((edu, i) => (
                <div key={i}>
                  <p className="font-semibold">{edu.degree}</p>
                  <p>{edu.institution}</p>
                  <p className="text-gray-500 text-xs">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* Right Column */}
        <section className="md:w-2/3 flex flex-col gap-6">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-2">
              Profile
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{about}</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-2">
              Experience
            </h2>
            <div className="text-sm space-y-4">
              {experience?.map((exp, i) => (
                <div key={i}>
                  <p className="font-semibold">
                    {exp.role} —{" "}
                    <span className="italic text-gray-600">{exp.company}</span>
                  </p>
                  <p className="text-xs text-gray-500 mb-1">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {exp.details?.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-2">
              Projects
            </h2>
            <div className="text-sm space-y-3">
              {projects?.map((proj, i) => (
                <div key={i}>
                  <p className="font-semibold">{proj.name}</p>
                  <p className="italic text-gray-600">{proj.tech}</p>
                  <p className="text-gray-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClassicEleganceTemplate;
