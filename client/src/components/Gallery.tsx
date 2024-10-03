import React, { useState, useEffect, useCallback } from "react";
import { Highlight } from "./ui/hero-highlight";

interface Image {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [galleryOpened, setGalleryOpened] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    // Simulating the image data that was originally in the HTML
    setImages([
      {
        src: "https://planete.onrender.com/img/outside%20(16).JPG",
        alt: "photo gallery image 01",
      },
      {
        src: "https://planete.onrender.com/img/club%20(7).JPG",
        alt: "photo gallery image 03",
      },
      {
        src: "https://planete.onrender.com/img/outside%20(4).JPG",
        alt: "photo gallery image 03",
      },
    ]);
  }, []);

  const openGallery = useCallback(
    (index: number) => {
      setActiveImageIndex(index);
      setActiveImageUrl(images[index].src);
      setGalleryOpened(true);
    },
    [images]
  );

  const closeGallery = useCallback(() => {
    setGalleryOpened(false);
    setTimeout(() => setActiveImageUrl(null), 300);
  }, []);

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    const newIndex = (activeImageIndex + 1) % images.length;
    setActiveImageIndex(newIndex);
    setActiveImageUrl(images[newIndex].src);
  }, [activeImageIndex, images]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    const newIndex = (activeImageIndex - 1 + images.length) % images.length;
    setActiveImageIndex(newIndex);
    setActiveImageUrl(images[newIndex].src);
  }, [activeImageIndex, images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") closeGallery();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage, closeGallery]);

  return (
    <main className="bg-neutral-200">
      <section className="px-4 py-24 mx-auto max-w-7xl ">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-700 to-white dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Gall
            <Highlight className="text-black dark:text-white">ery</Highlight>
            <br />
          </h2>
        </div>
      </section>

      <section>
        <div className="w-full h-full min-h-screen select-none">
          <div
            className="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view px-2 lg:px-0"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            <ul
              id="gallery"
              className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-3"
            >
              {images.map((image, index) => (
                <li key={index}>
                  <img
                    onClick={() => openGallery(index)}
                    src={image.src}
                    className="object-cover select-none w-full h-auto bg-gray-200 rounded-xl cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                    alt={image.alt}
                  />
                </li>
              ))}
            </ul>
          </div>
          {galleryOpened && (
            <div
              onClick={closeGallery}
              className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out"
            >
              <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
                <img
                  className="object-cover object-center w-full h-full select-none cursor-zoom-out"
                  src={activeImageUrl || undefined}
                  alt=""
                />
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
