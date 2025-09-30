const Snowflake = () => {
  const style = {
    left: `${Math.random() * 100}vw`,
    width: `${Math.random() * 3 + 1}px`,
    height: `${Math.random() * 3 + 1}px`,
    animationDuration: `${Math.random() * 7 + 5}s`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.7 + 0.3,
  };
  return <div className="snowflake" style={style}></div>;
};

const Snowfall = ({ count = 200 }) => {
  const snowflakes = Array.from({ length: count }).map((_, i) => (
    <Snowflake key={i} />
  ));
  return <div className="fixed top-0 left-0 w-full h-full overflow-hidden">{snowflakes}</div>;
};


export default function App() {
  const links = [
    { name: "Majalahlari.com", url: "https://majalahlari.com/" },
    { name: "Pendaftaran Santa Run", url: "https://forms.gle/j8izCDemDnBEEhuUA" },
    { name: "Hubungi WA Admin", url: "https://wa.me/+6285729741933?text=hallo%21%21" }
  ];

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center font-sans p-4 overflow-hidden">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
        .snowflake {
          position: absolute;
          top: -10vh;
          background-color: white;
          border-radius: 50%;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      <Snowfall />

      <main className="z-10 flex flex-col items-center text-center">
        {/* Gambar diubah menjadi ikon pohon Natal dengan border keemasan */}
        <img
          src="/logo.jpg"
          alt="Ikon Natal"
          // Ukuran logo default (mobile) adalah 112px, dan menjadi 128px di layar medium (md) ke atas.
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-yellow-300 shadow-lg mb-4"
        />

        <h1 
          // Ukuran teks default (mobile) adalah 2xl, dan menjadi 3xl di layar medium (md) ke atas.
          className="text-2xl md:text-3xl font-bold text-white tracking-wide"
        >
          Selamat Hari Natal!
        </h1>
        <p className="text-gray-300 mb-8 mt-1">
          Bagikan semangat Natal melalui tautan di bawah ini.
        </p>

        <div 
          // Lebar kontainer tautan akan 100% dari parent, tapi dibatasi.
          // Batas lebar maksimumnya 320px (max-w-sm) di mobile, dan 448px (max-w-md) di layar medium ke atas.
          className="w-full max-w-sm md:max-w-md"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              // Warna tombol diubah menjadi merah dan hijau saat disentuh (hover)
              className="block bg-red-600 text-white font-semibold py-3 px-5 rounded-lg w-full mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 shadow-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      </main>

      <footer className="absolute bottom-5 text-center text-xs text-gray-500 z-10">
        <p>Majalahlari.com</p>
      </footer>
    </div>
  );
}

