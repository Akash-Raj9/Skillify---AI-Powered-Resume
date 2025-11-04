import React from "react";

const TwoColumnTemplate = ({ data }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow rounded p-8 font-sans text-gray-900">
      <header className="mb-8 border-b-2 pb-4">
        <h1 className="text-5xl font-bold">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-lg italic">{data.profession || "Your Profession"}</p>
      </header>
      <div className="grid grid-cols-3 gap-6">
        {/* Left column */}
        <aside className="col-span-1">
          {data.personal_info?.email && (
            <p>
              <strong>Email:</strong> <br />
              {data.personal_info.email}
            </p>
          )}
          {data.personal_info?.phone && (
            <p className="mt-2">
              <strong>Phone:</strong> <br />
              {data.personal_info.phone}
            </p>
          )}
          {data.personal_info?.location && (
            <p className="mt-2">
              <strong>Location:</strong> <br />
              {data.personal_info.location}
            </p>
          )}
          {data.skills?.length > 0 && (
            <>
              <h2 className="mt-6 mb-2 font-semibold border-b-2">Skills</h2>
              <ul className="list-disc list-inside">
                {data.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </>
          )}
        </aside>

        {/* Right column */}
        <main className="col-span-2">
          {data.professional_summary && (
            <section className="mb-6">
              <h2 className="font-semibold border-b-2 mb-2">Summary</h2>
              <p className="whitespace-pre-line">{data.professional_summary}</p>
            </section>
          )}

          {data.experience?.length > 0 && (
            <section className="mb-6">
              <h2 className="font-semibold border-b-2 mb-2">Experience</h2>
              {data.experience.map((exp, i) => (
                <article key={i} className="mb-4">
                  <h3 className="font-bold">{exp.position}</h3>
                  <p className="italic">{exp.company}</p>
                  <p className="text-sm text-gray-600">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </p>
                  <p className="whitespace-pre-line">{exp.description}</p>
                </article>
              ))}
            </section>
          )}

          {data.education?.length > 0 && (
            <section>
              <h2 className="font-semibold border-b-2 mb-2">Education</h2>
              {data.education.map((edu, i) => (
                <article key={i} className="mb-4">
                  <h3 className="font-bold">
                    {edu.degree}
                    {edu.field && ` in ${edu.field}`}
                  </h3>
                  <p className="italic">{edu.institution}</p>
                  <p className="text-sm text-gray-600">
                    Graduation: {formatDate(edu.graduation_date)}
                  </p>
                </article>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default TwoColumnTemplate;
