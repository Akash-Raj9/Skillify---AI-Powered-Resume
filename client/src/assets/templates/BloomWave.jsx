import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const BloomWaveTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    return new Date(year, month - 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 via-purple-50 to-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden font-sans border border-pink-100">
      {/* Header */}
      <header
        className="p-10 border-b-4 text-center"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-gray-900">
          {data.personal_info?.full_name || 'Your Name'}
        </h1>
        <p className="text-lg font-medium mb-5 text-gray-600">
          {data.profession || data.personal_info?.profession || 'Your Profession'}
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {data.personal_info?.email && (
            <a
              href={`mailto:${data.personal_info.email}`}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
            >
              <Mail className="size-4" /> {data.personal_info.email}
            </a>
          )}
          {data.personal_info?.phone && (
            <span className="flex items-center gap-2 text-gray-700">
              <Phone className="size-4" /> {data.personal_info.phone}
            </span>
          )}
          {data.personal_info?.location && (
            <span className="flex items-center gap-2 text-gray-700">
              <MapPin className="size-4" /> {data.personal_info.location}
            </span>
          )}
          {data.personal_info?.linkedin && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.personal_info.linkedin}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition break-all"
            >
              <Linkedin className="size-4" />{' '}
              {data.personal_info.linkedin.split('https://www.')[1] ||
                data.personal_info.linkedin}
            </a>
          )}
          {data.personal_info?.website && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.personal_info.website}
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition break-all"
            >
              <Globe className="size-4" />{' '}
              {data.personal_info.website.split('https://')[1] ||
                data.personal_info.website}
            </a>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="p-10 space-y-10">
        {/* Profile */}
        {data.professional_summary && (
          <section>
            <h2
              className="text-3xl font-semibold mb-3 border-l-8 pl-3"
              style={{ borderColor: accentColor }}
            >
              Profile
            </h2>
            <p className="leading-relaxed text-gray-700 whitespace-pre-line">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section>
            <h2
              className="text-3xl font-semibold mb-5 border-l-8 pl-3"
              style={{ borderColor: accentColor }}
            >
              Experience
            </h2>
            <div className="grid gap-6">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-sm font-medium text-pink-600">{exp.company}</p>
                  <time className="block text-xs text-gray-500 mb-2">
                    {formatDate(exp.start_date)} –{' '}
                    {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                  </time>
                  {exp.description && (
                    <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <section>
            <h2
              className="text-3xl font-semibold mb-5 border-l-8 pl-3"
              style={{ borderColor: accentColor }}
            >
              Education
            </h2>
            <div className="grid gap-6">
              {data.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/70 rounded-xl border border-purple-100 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-sm font-medium text-purple-600">{edu.institution}</p>
                  <time className="block text-xs text-gray-500">
                    Graduation: {formatDate(edu.graduation_date)}
                  </time>
                  {edu.gpa && <p className="text-gray-700">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project?.length > 0 && (
          <section>
            <h2
              className="text-3xl font-semibold mb-5 border-l-8 pl-3"
              style={{ borderColor: accentColor }}
            >
              Projects
            </h2>
            <div className="grid gap-6">
              {data.project.map((p, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/70 rounded-xl border border-pink-100 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  {p.description && (
                    <p className="text-gray-700 text-sm">{p.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <section>
            <h2
              className="text-3xl font-semibold mb-4 border-l-8 pl-3"
              style={{ borderColor: accentColor }}
            >
              Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <li
                  key={index}
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium text-sm shadow"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default BloomWaveTemplate;
