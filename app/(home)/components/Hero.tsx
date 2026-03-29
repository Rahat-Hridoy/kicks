import Image from "next/image";

export function Hero() {
  return (
    <section className="px-4 mt-[108px] md:mt-[152px]">
      <div className="mx-auto max-w-[1320px] w-full">
        {/* DO IT RIGHT Header */}
        <h1 className="text-[60px] lg:text-[223px] font-bold leading-none text-center tracking-[-0.02em] uppercase  mb-6">
          <span className="text-primary">DO IT </span>
          <span className="text-accent">RIGHT</span>
        </h1>

        {/* Hero Card */}
        <div className="relative w-full min-h-[382px] md:min-h-[750px] rounded-[24px] md:rounded-[64px] overflow-hidden">
          <Image
            src="/image/bannerImage.png"
            alt="Hero Background"
            fill
            className="object-cover object-center"
          />

          {/* Bottom Gradient for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Left Vertical Badge */}
          <div className="absolute left-0 top-[10%] bg-primary h-[157px] w-[30px] md:h-[237px] md:w-[67px] rounded-r-lg md:rounded-r-2xl z-20 flex flex-col justify-center items-center shadow-lg">
            <span
              className="text-light-background text-[10px] md:text-[16px] whitespace-nowrap font-medium"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Nike product of the year
            </span>
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-6 left-6 md:bottom-16 md:left-12 lg:left-16 lg:bottom-16 z-20">
            <h2 className="text-accent-foreground text-2xl md:text-6xl lg:text-[74px] font-semibold uppercase mb-1 md:mb-4">
              Nike Air Max
            </h2>
            <p className="font-sans text-accent-foreground/90 text-sm md:text-2xl font-semibold max-w-[200px] md:max-w-[490px] leading-snug mb-4 md:mb-8">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="bg-accent hover:bg-accent/90 transition-colors text-accent-foreground font-medium text-sm md:text-sm px-5 py-2.5 md:px-8 md:py-4 rounded md:rounded-xl">
              SHOP NOW
            </button>
          </div>

          {/* Bottom Right Thumbnails */}
          <div className="absolute bottom-6 right-4 md:bottom-16 md:right-12 lg:right-16 lg:bottom-16 z-20 flex flex-col gap-2 md:gap-5">
            <div className="relative w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-lg md:rounded-3xl border border-white md:border-none overflow-hidden shadow-2xl bg-black/10">
              <Image
                src="/image/banner1.png"
                alt="Thumbnail 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-lg md:rounded-3xl border border-white md:border-none overflow-hidden shadow-2xl bg-black/10">
              <Image
                src="/image/banner2.png"
                alt="Thumbnail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
