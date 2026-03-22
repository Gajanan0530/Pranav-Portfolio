import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          <strong>Hi there! I'm Pranav</strong>, a dedicated QA Test Engineer and Automation Tester
          currently pursuing my studies while building a strong foundation in software
          quality assurance. My journey in tech started with curiosity about how things
          work behind the scenes, and now I'm passionate about ensuring software
          reliability and user satisfaction.
        </p>
        <p className="body-text max-w-2xl mt-6">
          As someone aspiring to become a Test Architect and Quality Assurance Lead,
          I focus on creating comprehensive testing strategies that catch issues before
          they reach users. I love the challenge of automating repetitive tasks and
          designing test frameworks that make development smoother for everyone.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          Beyond the technical skills, I'm all about <strong>continuous improvement</strong>
          and learning from real-world scenarios. Whether it's debugging a tricky issue,
          collaborating with developers, or sharing knowledge with peers, I believe
          in growing together as a community. When I'm not testing software, you'll
          find me exploring new testing tools or contributing to open-source projects
          that make testing more accessible.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
