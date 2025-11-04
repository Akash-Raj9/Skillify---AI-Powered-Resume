import React from "react";

const InfographicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const skillBarWidth = 80; // example fixed width for all skill bars, you can customize

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded shadow-lg font-sans text-gray-900">
      <header
        className="mb-8 border-b-4"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-5xl font-bold">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl italic">{data.profession || "Your Profession"}</p>
      </header>

      {/* Skills with bars */}
      {data.skills?.length > 0 && (
        <section className="mb-10">
          <h2
            className="text-3xl font-semibold mb-5 text-center"
            style={{ color: accentColor }}
          >
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {data.skills.map((skill, i) => (
              <div key={i}>
                <p className="font-semibold">{skill}</p>
                <div className="h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full"
                    style={{ width: skillBarWidth + "%", backgroundColor: accentColor }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Timeline style Experience */}
      {data.experience?.length > 0 && (
        <section className="mb-10">
          <h2
            className="text-3xl font-semibold mb-6 text-center"
            style={{ color: accentColor }}
          >
            Experience
          </h2>
          <ul className="relative border-l-4 border-gray-300 pl-8 space-y-8">
            {data.experience.map((exp, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-5 top-1.5 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white"></span>
                <h3 className="font-bold text-lg">{exp.position}</h3>
                <p className="italic">{exp.company}</p>
                <p className="text-sm text-gray-600">
                  {formatDate(exp.start_date)} -{" "}
                  {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </p>
                <p className="whitespace-pre-line">{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Education Timeline */}
      {data.education?.length > 0 && (
        <section>
          <h2
            className="text-3xl font-semibold mb-6 text-center"
            style={{ color: accentColor }}
          >
            Education
          </h2>
          <ul className="relative border-l-4 border-gray-300 pl-8 space-y-6">
            {data.education.map((edu, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-5 top-2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white"></span>
                <h3 className="font-bold">
                  {edu.degree}
                  {edu.field && ` in ${edu.field}`}
                </h3>
                <p className="italic">{edu.institution}</p>
                <p className="text-sm text-gray-600">
                  Graduation: {formatDate(edu.graduation_date)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default InfographicTemplate;
