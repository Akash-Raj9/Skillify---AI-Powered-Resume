import React, { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Rahul Gogra',
    title: 'Software Engineer',
    message:
      'Using this platform significantly streamlined my job application process. It tailored my resume for technical roles, helping me land interviews faster and stand out in competitive hiring.',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
  },
  {
    name: 'Amarjeet Kumar',
    title: 'Frontend Developer',
    message:
      'The AI-driven suggestions helped me highlight my skills precisely. I felt confident my resume was aligned with current industry standards and showcased my frontend expertise clearly.',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
  },
  {
    name: 'Muskan Rao',
    title: 'Product Manager',
    message:
      'This tool made crafting a professional and impactful resume effortless. It helped me focus on strategic accomplishments, drastically improving my interview callbacks.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
  },
  {
    name: 'Shruti Sharma',
    title: 'UX Designer',
    message:
      'With this platform, I rapidly prototyped my portfolio and created a polished resume that truly reflected my design skills and project successes, impressing multiple employers.',
    image:
      'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Amit Raj',
    title: 'Marketing Strategist',
    message:
      'The AI resume builder helped me tailor my experience to different campaign successes, making my resume more dynamic and compelling for marketing roles.',
    image:
      'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Shivangi Sinha',
    title: 'Data Scientist',
    message:
      'I appreciated how the AI highlighted key analytical skills and projects on my resume, helping me communicate my value effectively and get noticed by top employers.',
    image:
      'https://randomuser.me/api/portraits/women/52.jpg',
  },
];


const Testimonial = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const bounds = cardRefs.current[index].getBoundingClientRect();
    setTooltip({
      visible: true,
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      text: testimonials[index].name,
    });
  };

  const handleMouseLeave = () => {
    setTooltip((cur) => ({ ...cur, visible: false }));
  };

  // Split into two rows for layout
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <div id="testimonials" className="scroll-mt-24">
      <h1 className="text-center text-4xl font-bold text-gray-900">Testimonials</h1>
      <p className="text-center text-gray-500 mt-1 mb-6">
        Real words from real users who have experienced our product.
      </p>

      <div className="flex flex-col items-center justify-center gap-12 py-12">
        {/* First Row */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {firstRow.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              className="relative border border-gray-200 rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              {tooltip.visible && tooltip.text === testimonial.name && (
                <span
                  className="absolute px-2.5 py-1 text-sm rounded bg-indigo-500 text-white pointer-events-none shadow"
                  style={{
                    top: tooltip.y + 8,
                    left: tooltip.x + 8,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    zIndex: 20,
                  }}
                >
                  {tooltip.text}
                </span>
              )}

              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 text-gray-500 w-full">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Very easy to Generate Resume
                  </h3>
                  <p className="my-4 text-sm line-clamp-3">{testimonial.message}</p>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full w-9 h-9"
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                  />
                  <div className="space-y-0.5 font-medium text-left ml-3">
                    <p>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {secondRow.map((testimonial, i) => {
            const index = i + 3;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                className="relative border border-gray-200 rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                {tooltip.visible && tooltip.text === testimonial.name && (
                  <span
                    className="absolute px-2.5 py-1 text-sm rounded bg-indigo-500 text-white pointer-events-none shadow"
                    style={{
                      top: tooltip.y + 8,
                      left: tooltip.x + 8,
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s',
                      zIndex: 20,
                    }}
                  >
                    {tooltip.text}
                  </span>
                )}
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 text-gray-500 w-full">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Very easy to integrate
                    </h3>
                    <p className="my-4 text-sm line-clamp-3">{testimonial.message}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      className="rounded-full w-9 h-9"
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                    />
                    <div className="space-y-0.5 font-medium text-left ml-3">
                      <p>{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
