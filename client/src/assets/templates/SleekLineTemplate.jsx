import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const SleekLineTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    return new Date(year, month - 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden font-sans">
      {/* Header */}
      <header
        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-8"
        style={{ borderBottom: `6px solid ${accentColor}` }}
      >
        <h1 className="text-5xl font-bold tracking-tight mb-1">
          {data.personal_info?.full_name || 'Your Name'}
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          {data.profession || data.personal_info?.profession || 'Your Profession'}
        </p>
        <div className="flex flex-wrap gap-5 text-sm text-gray-300">
          {data.personal_info?.email && (
            <a href={`mailto:${data.personal_info.email}`} className="flex items-center gap-2 hover:text-gray-100">
              <Mail className="size-4" /> {data.personal_info.email}
            </a>
          )}
          {data.personal_info?.phone && (
            <span className="flex items-center gap-2">
              <Phone className="size-4" /> {data.personal_info.phone}
            </span>
          )}
          {data.personal_info?.location && (
            <span className="flex items-center gap-2">
              <MapPin className="size-4" /> {data.personal_info.location}
            </span>
          )}
          {data.personal_info?.linkedin && (
            <a
              href={data.personal_info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-100"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          )}
          {data.personal_info?.github && (
            <a
              href={data.personal_info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-100"
            >
              <Github className="size-4" /> GitHub
            </a>
          )}
          {data.personal_info?.website && (
            <a
              href={data.personal_info.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-100"
            >
              <Globe className="size-4" /> Website
            </a>
          )}
        </div>
      </header>

      {/* Body */}
      <main className="p-10 space-y-10">
        {/* Profile */}
        {data.professional_summary && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 border-b-2 pb-2 mb-3" style={{ borderColor: accentColor }}>
              Profile
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4" style={{ borderColor: accentColor }}>
              Experience
            </h2>
            <div className="space-y-5">
              {data.experience.map((exp, i) => (
                <div key={i} className="p-4 border-l-4" style={{ borderColor: accentColor }}>
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <time className="block text-xs text-gray-500">
                    {formatDate(exp.start_date)} - {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                  </time>
                  {exp.description && <p className="mt-2 text-gray-700">{exp.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4" style={{ borderColor: accentColor }}>
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="border-l-4 pl-4" style={{ borderColor: accentColor }}>
                  <h3 className="text-lg font-semibold">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                  <time className="block text-xs text-gray-500">
                    Graduation: {formatDate(edu.graduation_date)}
                  </time>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4" style={{ borderColor: accentColor }}>
              Projects
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {data.project.map((p, i) => (
                <div key={i} className="p-4 border rounded-lg hover:shadow-md transition">
                  <h3 className="font-semibold text-lg text-gray-800">{p.name}</h3>
                  <p className="text-sm text-gray-700">{p.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4" style={{ borderColor: accentColor }}>
              Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {data.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-3 py-1 rounded-full bg-gray-200 text-gray-900 font-medium text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default SleekLineTemplate;
