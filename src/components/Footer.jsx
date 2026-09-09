const Footer = () => {

  const nombre = "Sofi"

  return (
    <footer className="bg-gradient-to- from-primary-light via-accent/30 to-accent-purple/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-text">
          Hecho con <span className="text-accent">React</span> por{" "}
          <span className="font-semibold">{nombre}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
