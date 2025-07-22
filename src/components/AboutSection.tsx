import {
  Carousel,
  CarouselContent as CarouselViewport,
  CarouselItem,
  CarouselPrevious as CarouselPrev,
  CarouselNext,
} from '@/components/ui/carousel';

export default function AboutSection() {
  const techImages = [
    { src: '/images/test.jpeg', alt: 'tech demo 1' },
    { src: '/images/test.jpeg', alt: 'tech demo 2' },
    { src: '/images/test.jpeg', alt: 'tech demo 3' },
    { src: '/images/test.jpeg', alt: 'tech demo 4' },
  ];

  const travelImages = [
    { src: '/images/test.jpeg', alt: 'Travel snapshot 1' },
    { src: '/images/test.jpeg', alt: 'Travel snapshot 2' },
    { src: '/images/test.jpeg', alt: 'Travel snapshot 3' },
    { src: '/images/test.jpeg', alt: 'Travel snapshot 4' },
  ];

  return (
    <section id="about" className="max-w-5xl mx-auto mb-20 scroll-mt-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <div className="grid grid-cols-4 grid-rows-2 gap-8">
        <div className="col-span-3">
          <h3 className="text-2xl font-semibold mb-4">Tech &amp; Robotics</h3>
          <p className="text-lg leading-relaxed mb-4">
            I’m <span className="font-semibold">Yeo Zong Yao</span>, with
            hands-on experience in ROS 2 navigation, embedded firmware on
            STM32/Olimex A20, and full-stack web apps. I’ve built autonomous
            navigation pipelines for quadruped robots, streamed sensor data via
            MQTT, and optimized real‑time control systems.
          </p>
          <p className="text-lg leading-relaxed">
            Bridging hardware and software is my sweet spot—whether that’s
            writing low-level drivers or crafting interactive dashboards to
            visualize robot telemetry.
          </p>
        </div>

        <div className="col-span-1 relative flex items-center justify-center">
          <Carousel className="w-56 h-56 overflow-hidden">
            <CarouselViewport className="flex h-full">
              {techImages.map((img, idx) => (
                <CarouselItem key={idx} className="flex-shrink-0 w-full h-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselViewport>
            <CarouselPrev className="absolute left-2 top-1/2 -translate-y-1/2 text-xl">
              ‹
            </CarouselPrev>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-xl">
              ›
            </CarouselNext>
          </Carousel>
        </div>

        <div className="col-span-1 relative flex items-center justify-center">
          <Carousel className="w-56 h-56 overflow-hidden">
            <CarouselViewport className="flex h-full">
              {travelImages.map((img, idx) => (
                <CarouselItem key={idx} className="flex-shrink-0 w-full h-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselViewport>
            <CarouselPrev className="absolute left-2 top-1/2 -translate-y-1/2 text-xl">
              ‹
            </CarouselPrev>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-xl">
              ›
            </CarouselNext>
          </Carousel>
        </div>

        <div className="col-span-3">
          <h3 className="text-2xl font-semibold mb-4">Outside the Code</h3>
          <p className="text-lg leading-relaxed mb-4">
            When I’m not coding or calibrating sensors, you’ll find me playing
            water polo, hiking scenic trails, or discovering new cultures on my
            travels.
          </p>
          <p className="text-lg leading-relaxed">
            Exploring remote waterfalls, summiting peaks, and capturing those
            adventures on camera are some of my favorite ways to recharge.
          </p>
        </div>
      </div>
    </section>
  );
}
