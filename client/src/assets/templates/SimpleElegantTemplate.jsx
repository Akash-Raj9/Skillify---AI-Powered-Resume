import React from "react";

const SimpleElegantTemplate = ({ data }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded shadow font-serif text-gray-900">
      <header className="text-center border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="italic text-gray-700 mt-1">
          {data.profession || "Your Profession"}
        </p>
      </header>
      {data.professional_summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Profile
          </h2>
          <p className="leading-relaxed whitespace-pre-line">
            {data.professional_summary}
          </p>
        </section>
      )}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Experience
          </h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold text-lg">{exp.position}</h3>
              <p className="italic">{exp.company}</p>
              <p className="text-sm text-gray-600">
                {formatDate(exp.start_date)} -{" "}
                {exp.is_current ? "Present" : formatDate(exp.end_date)}
              </p>
              <p className="whitespace-pre-line">{exp.description}</p>
            </div>
          ))}
        </section>
      )}
      {data.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <h3 className="font-bold">
                {edu.degree}
                {edu.field && ` in ${edu.field}`}
              </h3>
              <p className="italic">{edu.institution}</p>
              <p className="text-sm text-gray-600">
                Graduation: {formatDate(edu.graduation_date)}
              </p>
            </div>
          ))}
        </section>
      )}
      {data.skills?.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <li
                key={i}
                className="text-sm border rounded px-3 py-1 border-gray-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default SimpleElegantTemplate;
