import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const ClassicGridTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    return new Date(year, month - 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-900 font-serif shadow-2xl border rounded-lg overflow-hidden">
      {/* Header */}
      <header
        className="p-10 text-center text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-5xl font-extrabold mb-2">{data.personal_info?.full_name || 'Your Name'}</h1>
        <p className="text-lg mb-4 opacity-90">
          {data.profession || data.personal_info?.profession || 'Your Profession'}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
          {data.personal_info?.email && (
            <a href={`mailto:${data.personal_info.email}`} className="flex items-center gap-2">
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
            <a href={data.personal_info.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="size-4" /> LinkedIn
            </a>
          )}
          {data.personal_info?.github && (
            <a href={data.personal_info.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="size-4" /> GitHub
            </a>
          )}
          {data.personal_info?.website && (
            <a href={data.personal_info.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Globe className="size-4" /> Website
            </a>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="grid md:grid-cols-3 divide-x">
        {/* Left column */}
        <aside className="bg-gray-50 p-8 space-y-6 col-span-1">
          {data.professional_summary && (
            <section>
              <h2
                className="text-xl font-bold border-b-4 pb-1 mb-2"
                style={{ borderColor: accentColor }}
              >
                Profile
              </h2>
              <p className="text-gray-700 whitespace-pre-line">{data.professional_summary}</p>
            </section>
          )}

          {data.skills?.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold border-b-4 pb-1 mb-2"
                style={{ borderColor: accentColor }}
              >
                Skills
              </h2>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                {data.skills.map((skill, index) => (
                  <li key={index} className="bg-gray-200 px-2 py-1 rounded-md text-center font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* Right column */}
        <main className="col-span-2 p-10 space-y-8">
          {data.experience?.length > 0 && (
            <section>
              <h2
                className="text-2xl font-bold border-b-4 pb-1 mb-4"
                style={{ borderColor: accentColor }}
              >
                Experience
              </h2>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-5">
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <time className="block text-xs text-gray-500 mb-2">
                    {formatDate(exp.start_date)} - {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                  </time>
                  {exp.description && <p className="text-gray-700">{exp.description}</p>}
                </div>
              ))}
            </section>
          )}

          {data.education?.length > 0 && (
            <section>
              <h2
                className="text-2xl font-bold border-b-4 pb-1 mb-4"
                style={{ borderColor: accentColor }}
              >
                Education
              </h2>
              {data.education.map((edu, i) => (
                <div key={i} className="mb-4">
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
            </section>
          )}

          {data.project?.length > 0 && (
            <section>
              <h2
                className="text-2xl font-bold border-b-4 pb-1 mb-4"
                style={{ borderColor: accentColor }}
              >
                Projects
              </h2>
              <div className="space-y-5">
                {data.project.map((p, i) => (
                  <div key={i} className="border-l-4 pl-4" style={{ borderColor: accentColor }}>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    {p.description && <p className="text-sm text-gray-700 mt-1">{p.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default ClassicGridTemplate;
