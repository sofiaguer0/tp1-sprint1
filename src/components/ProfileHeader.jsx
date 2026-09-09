function ProfileHeader() {
   const handleClick = () => {
    alert("Mi GitHub: https://github.com/sofiaguer0");
  };

  return (
    <header className="bg-gradient-to- from-primary-light via-accent/30 to-accent-purple/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-center justify-between py-5 border-b border-border">

          <div className="flex items-center gap-3">
            <img src="/logo1.jpg" className="w-12 h-12 object-contain" />

            <div>
              <p className="font-semibold text-text text-lg"> Sofi </p>
              <p className="text-xs text-primary"> Developer Junior (newborn) </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text">
            <a href="#skills" className="hover:text-accent transition-colors"> Skills</a>
          </nav>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-12 py-16 md:py-24">

          {/* Texto */}
          <div className="text-left">

            <p className="inline-block bg-surface/70 text-primary px-4 py-2 rounded-full text-sm font-medium mb-5 shadow-sm">
              ✨ Bienvenidos a mi portfolio 
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight mb-6">
              Hola, soy{" "} <span className="text-accent"> Sofi</span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted/80 max-w-xl leading-relaxed mb-4">
              Intentando desde el 2022
            </p>

            <p className="text-base text-text-soft mb-8"> La frase que me representa como dev: <span className="font-semibold text-accent-purple ml-2"> "No entiendo" </span> </p>

           <button
              onClick={handleClick}
              className="
                bg-primary
                hover:bg-primary-hover
                text-white
                font-semibold
                px-7
                py-3
                rounded-full
                shadow-md
                shadow-primary/50
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-200
              "
            >
              Mi GitHub Aqui →
            </button>

          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80">

              <div className="absolute inset-4 bg-primary-light rounded-3xl opacity-70"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="logoo.jpg"
                  className="w-56 h-56 object-contain drop-shadow-lg"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
