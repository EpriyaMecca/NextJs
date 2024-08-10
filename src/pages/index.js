import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  const login = () => {
    router.push('/login');
  }

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 px-6">
        <div className="flex justify-center pt-5">
          <nav
            className="bg-cyan-500 p-5 rounded-full shadow-md w-full max-w-4xl"
            data-aos="fade-down"
          >
            <div className="flex items-center justify-between mx-5">
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="MyApp Logo" width={40} height={40} className="rounded-full" />
                <span className="text-white font-semibold text-lg">SIKERMA</span>
              </div>
              <a
                onClick={login}
                className="bg-white text-sky-500 hover:bg-sky-500 hover:text-white font-semibold py-2 px-4 rounded-full"
              >
                Login
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main className="pt-40 px-4 lg:px-24">
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-sm lg:max-w-4xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-cyan-500 poppins-bold">
              Sistem Informasi <br /> Kerjasama
            </h1>
            <p className="mt-5 text-xl text-cyan-500">
              Mempermudah Kerjasama, Meningkatkan Produktivitas <br />
              Temukan Solusi Cerdas untuk Semua Kebutuhan Anda!
            </p>
            <div className="pt-10 mt-5 text-center lg:text-left" data-aos="fade-left">
              <a className="bg-cyan-500 text-white hover:bg-sky-500 hover:text-white font-semibold py-4 px-8 rounded-full" >
                Klik Untuk Berselancar
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end relative mt-14 lg:mt-0 lg:w-1/2">
            <div className="w-full max-w-xs lg:max-w-md">
              <Image
                src="/2.png"
                alt="Descriptive Alt Text"
                width={600}
                height={600}
                className="relative left-0 top-44 z-20 animate"
              />
              <div className="absolute right-0 top-0 z-10 bg-cyan-500 h-[409px] w-[250px] rounded-lg">
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
