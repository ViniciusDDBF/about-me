import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  User,
  Code,
  Briefcase,
  Star,
} from 'lucide-react';
import Button from './Button';

const PortfolioBlog = () => {
  const [activeFilter] = useState('all');

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'UI/UX Design', level: 88, category: 'Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'Full-stack marketplace with real-time chat, payment processing, and inventory management',
      tags: ['React', 'TypeScript', 'Redux', 'TailwindCSS', 'PostgreSQL'],
      category: 'fullstack',
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: true,
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Navigation */}
      <nav className="bg-charcoal-800/95 backdrop-blur-sm border-b border-charcoal-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-ember-500 text-2xl font-bold">
              Vinicius Dundich
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-charcoal-300 hover:text-ember-400 ember-transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-charcoal-300 hover:text-ember-400 ember-transition"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-charcoal-300 hover:text-ember-400 ember-transition"
              >
                Skills
              </a>
              <Button text="Contact" variant="primary" size="sm" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-ember">Web Developer</span>
            </h1>
            <p className="text-xl text-charcoal-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting sophisticated digital experiences through clean code,
              thoughtful design, and strategic problem-solving. Specialized in
              modern web technologies and user-centered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                text="Download Resume"
                variant="secondary"
                size="lg"
                startIcon={<User size={20} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-charcoal-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-ember-500 mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-charcoal-300 leading-relaxed">
                I'm a passionate developer who believes great software comes
                from understanding both the technical challenge and the human
                need. With [X] years of experience building scalable
                applications, I specialize in creating solutions that are both
                powerful and intuitive.
              </p>
              <p className="text-lg text-charcoal-300 leading-relaxed">
                My approach combines technical expertise with design thinking,
                ensuring every project delivers exceptional user experiences
                while maintaining clean, maintainable code.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  text="LinkedIn"
                  variant="secondary"
                  startIcon={<Linkedin size={18} />}
                />
                <Button
                  text="GitHub"
                  variant="secondary"
                  startIcon={<Github size={18} />}
                />
                <Button
                  text="Email"
                  variant="secondary"
                  startIcon={<Mail size={18} />}
                />
              </div>
            </div>
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-ember-400 mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="text-ember-400" size={20} />
                  <span className="text-charcoal-300">
                    [X]+ years of development experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="text-ember-400" size={20} />
                  <span className="text-charcoal-300">
                    [X]+ successful project launches
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="text-ember-400" size={20} />
                  <span className="text-charcoal-300">
                    Specialized in [Your Key Expertise]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-charcoal-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-ember-500 mb-12 text-center">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-charcoal-800 border border-charcoal-600 hover:border-ember-400/50 rounded-xl p-6 lift-base hover:lift-hover"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-ember-400">{skill.name}</h3>
                  <span className="text-sm text-charcoal-400">
                    {skill.category}
                  </span>
                </div>
                <div className="relative">
                  <div className="bg-charcoal-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-ember-500 to-ember-400 h-full rounded-full ember-transition"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-charcoal-300 mt-2 block">
                    {skill.level}% Proficiency
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-charcoal-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-ember-500 mb-12 text-center">
            Ecommerce Project
          </h2>

          {/* Projects Grid */}
          <div className="">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group bg-charcoal-800 border border-charcoal-600 hover:border-ember-400/50 rounded-xl overflow-hidden lift-base  ${
                  project.featured ? 'ring-1 ring-ember-500/30' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-charcoal-700 h-96">
                  <div className="w-full h-full bg-gradient-subtle flex items-center justify-center">
                    <span className="text-charcoal-400 text-lg">
                      Project Screenshot
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-ember-500 text-white px-3 py-1 rounded-full text-sm font-medium ember-glow">
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ember-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-charcoal-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-charcoal-700 text-ember-300 px-3 py-1 rounded-full text-sm border border-charcoal-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button
                      text="View Project"
                      variant="primary"
                      size="sm"
                      endIcon={<ExternalLink size={16} />}
                    />
                    <Button
                      text="Code"
                      variant="secondary"
                      size="sm"
                      startIcon={<Github size={16} />}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-800 py-6 px-6">
        <div className="border-t border-charcoal-700 mt-8 pt-8 text-center flex flex-1 justify-evenly">
          <p className="text-charcoal-400 text-sm">© 2025 Vinicius Dundich</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-charcoal-400 hover:text-ember-400 ember-transition"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-charcoal-400 hover:text-ember-400 ember-transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-charcoal-400 hover:text-ember-400 ember-transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioBlog;
