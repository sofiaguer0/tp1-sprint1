function SkillCard({ name, level, isFavorite }) {
  return (
    <article className="bg-surface rounded-xl shadow-md p-5 hover:shadow-lg transition border border-border">
      <h3 className="text-xl font-bold text-text">{name}</h3>

      <p className="text-text-soft mb-3">{level}</p>

      {isFavorite && (
        <span className="inline-block bg-accent/30 text-text-muted px-3 py-1 rounded-full text-sm">
          ⭐ Favorita
        </span>
      )}
    </article>
  );
}

export default SkillCard;
