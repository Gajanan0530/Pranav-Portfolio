import SectionBlock from './SectionBlock';

const education = [
  {
    degree: 'Bachelors of Technology(B.Tech), Computer Science, Lovely Professional University',
    school: 'Phagwara, Punjab',
    year: '2023 – 2027(Pursuing)',
  },
  {
    degree: 'Higher Secondary (Class 12), PCM, Tirumala Junior College',
    school: 'Visakhapatnam, Andhra Pradesh',
    year: '2021 – 2023',
  },
  {
    degree: 'Higher Primary (Class 10), ICSE, St. Ann\'s School',
    school: 'Visakhapatnam, Andhra Pradesh',
    year: '2016 – 2021',
  },
];

const EducationSection = () => (
  <SectionBlock id="education" title="Education">
    <div className="grid gap-6 md:grid-cols-1">
      {education.map((item) => (
        <div
          key={item.degree}
          className="group relative p-6 border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] rounded-none"
        >
          <h3 className="text-base md:text-lg font-bold">
            {item.degree}
          </h3>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2">
            <span className="text-sm font-medium">
              {item.school}
            </span>
            <span className="hidden md:inline text-current/20 group-hover:text-white/20">•</span>
            <span className="font-mono text-xs">
              {item.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default EducationSection;
