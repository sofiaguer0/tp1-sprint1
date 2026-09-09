import SkillCard from './SkillCard'
import { skills } from '../data/skills'

function SkillList() {
  return (
    <main
      id="skills"
      className="bg-bg px-6 md:px-10 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Título  */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Mis conocimientos
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Skills 💻
          </h2>

          <p className="text-text-muted/70 mt-3 max-w-2xl">
            Estas son algunas de las tecnologías que estoy aprendiendo
            y utilizando en mis proyectos:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              level={skill.level}
              isFavorite={skill.isFavorite}
            />
          ))}
        </div>

      </div>
    </main>
  )
}

export default SkillList
