function SkillCard({ name, level, isFavorite }) {
  return (
    <article className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{name}</h3>

      <p className="text-gray-600 mb-3">{level}</p>

      {isFavorite && (
        <span className="inline-block bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm">
          ⭐ Favorita
        </span>
      )}
    </article>
  );
}

export default SkillCard;