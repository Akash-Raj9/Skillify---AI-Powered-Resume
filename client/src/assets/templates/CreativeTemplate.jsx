import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const CreativeTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    return new Date(year, month - 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-lg shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <header className="p-8 bg-gradient-to-r from-purple-900 to-pink-700">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3">
          {data.personal_info?.full_name || 'Your Name'}
        </h1>
        <p className="text-lg font-light mb-6 max-w-2xl">
          {data.profession || data.personal_info?.profession || 'Your Profession'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-5" />
              <a href={`mailto:${data.personal_info.email}`} className="underline hover:text-pink-300">
                {data.personal_info.email}
              </a>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-5" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-5" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.personal_info.linkedin}
              className="flex items-center gap-2 underline hover:text-pink-300 break-all"
            >
              <Linkedin className="size-5" />
              <span>
                {data.personal_info.linkedin.split('https://www.')[1]
                  ? data.personal_info.linkedin.split('https://www.')[1]
                  : data.personal_info.linkedin}
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.personal_info.website}
              className="flex items-center gap-2 underline hover:text-pink-300 break-all"
            >
              <Globe className="size-5" />
              <span>
                {data.personal_info.website.split('https://')[1]
                  ? data.personal_info.website.split('https://')[1]
                  : data.personal_info.website}
              </span>
            </a>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="p-8 bg-gradient-to-b from-pink-50 to-pink-100 text-gray-900">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-3 border-b-4 border-pink-600 inline-block"
              style={{ borderColor: accentColor }}
            >
              Profile
            </h2>
            <p className="leading-relaxed">{data.professional_summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-6 border-b-4 border-pink-600 inline-block"
              style={{ borderColor: accentColor }}
            >
              Experience
            </h2>
            <div className="space-y-7 border-l-4 border-pink-400 pl-6">
              {data.experience.map((exp, index) => (
                <article key={index}>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-sm font-medium text-pink-600">{exp.company}</p>
                  <time className="block text-xs text-gray-600 mb-2">
                    {formatDate(exp.start_date)} - {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                  </time>
                  {exp.description && <p className="leading-relaxed whitespace-pre-line">{exp.description}</p>}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-6 border-b-4 border-pink-600 inline-block"
              style={{ borderColor: accentColor }}
            >
              Education
            </h2>
            <div className="space-y-6 border-l-4 border-pink-400 pl-6">
              {data.education.map((edu, index) => (
                <article key={index}>
                  <h3 className="text-xl font-semibold">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-sm font-medium text-pink-600">{edu.institution}</p>
                  <time className="block text-xs text-gray-600">
                    Graduation: {formatDate(edu.graduation_date)}
                  </time>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-6 border-b-4 border-pink-600 inline-block"
              style={{ borderColor: accentColor }}
            >
              Projects
            </h2>
            <div className="space-y-6 border-l-4 border-pink-400 pl-6">
              {data.project.map((p, index) => (
                <article key={index}>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {p.description && <p className="leading-relaxed text-sm">{p.description}</p>}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-3xl font-bold mb-4 border-b-4 border-pink-600 inline-block"
              style={{ borderColor: accentColor }}
            >
              Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <li
                  key={index}
                  className="px-3 py-1 rounded-full bg-pink-300 text-pink-900 font-medium text-sm"
                  style={{ backgroundColor: accentColor + '33' }}
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

export default CreativeTemplate;
