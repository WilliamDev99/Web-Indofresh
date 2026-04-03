export default function BannerSection() {
  const banners = [
    { src: "/images/banner1.png", alt: "Let's Connect" },
    { src: "/images/banner2.png", alt: "Join Our Network" },
    { src: "/images/banner3.png", alt: "Wang Shan Warisan Cinta Abadi" },
  ];

  return (
    <section className="py-12 bg-neutral-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {banners.map((banner, index) => (
          <div key={index} className="w-full relative rounded-2xl overflow-hidden shadow-md">
            <img 
              src={banner.src} 
              alt={banner.alt} 
              className="w-full h-auto object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
