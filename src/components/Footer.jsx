const Footer = () => {

  const nombre = "Sofi"

  return (
    <footer className="bg-gradient-to- from-rose-100 via-pink-50 to-purple-100 border-t border-rose-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-rose-900">
          Hecho con <span className="text-pink-400">React</span> por{" "}
          <span className="font-semibold">{nombre}</span>
        </p>

      
      </div>
    </footer>
  )
}

export default Footer