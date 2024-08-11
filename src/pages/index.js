import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const router = useRouter();

  const login = () => {
    router.push('/login');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-10 px-4 md:px-6">
        <div className="flex justify-center pt-5">
          <nav
            className="bg-cyan-500 p-4 md:p-5 rounded-full shadow-md w-full max-w-4xl"
            data-aos="fade-down"
          >
            <div className="flex items-center justify-between mx-3 md:mx-5">
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="MyApp Logo" width={40} height={40} className="rounded-full" />
                <span className="text-white font-semibold text-sm md:text-lg">SIKERMA</span>
              </div>
              <button
                onClick={login}
                className="bg-white text-sky-500 hover:bg-sky-500 hover:text-white font-semibold py-2 px-4 rounded-full text-sm md:text-base"
              >
                Login
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="pt-36 md:pt-40 px-4 lg:px-24 flex-grow">
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-sm md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-cyan-500 poppins-bold">
              Sistem Informasi <br /> Kerjasama
            </h1>
            <p className="mt-5 text-base md:text-xl text-cyan-500">
              Mempermudah Kerjasama, Meningkatkan Produktivitas <br />
              Temukan Solusi Cerdas untuk Semua Kebutuhan Anda!
            </p>
            <div className="pt-8 md:pt-10 mt-5 text-center lg:text-left" data-aos="fade-left">
              <button
                onClick={login}
                className="bg-cyan-500 text-white hover:bg-sky-500 hover:text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-base"
              >
                Klik Untuk Berselancar
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end relative mt-10 lg:mt-0 lg:w-1/2">
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
              <Image
                src="/2.png"
                alt="Descriptive Alt Text"
                width={600}
                height={600}
                className="relative top-10 md:top-24 lg:top-44 z-20 animate"
              />
              <div className="absolute right-0 top-0 z-10 bg-cyan-500 h-[200px] md:h-[300px] lg:h-[409px] w-[125px] md:w-[200px] lg:w-[250px] rounded-lg"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
