import React, { useState, useEffect, useCallback } from "react";
import { Highlight } from "../ui/hero-highlight";
import Pagination from "./Pagination";
import { FaTruckLoading } from "react-icons/fa";

interface Image {
  src: string;
  alt: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [galleryOpened, setGalleryOpened] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6; // Number of images per page
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const checkImageExists = async (src: string): Promise<boolean> => {
      try {
        const response = await fetch(src);
        console.log(response);

        return response.ok;
      } catch (error) {
        console.error(`Error checking image ${src}:`, error);
        return false; // Return false if there's an error
      }
    };
    // Loading images from public/images folder
    const loadImages = async () => {
      setLoading(true); // Set loading to true when starting to load images
      const imageArray = [];
      for (let i = 1; i <= 17; i++) {
        const imageSrc = `/images/image${i}.jpeg`;
        const imageExists = await checkImageExists(imageSrc);
        if (imageExists) {
          imageArray.push({
            src: imageSrc,
            alt: `Image ${i}`,
            description: `Description for image ${i}`,
          });
        }
      }
      setImages(imageArray);
      setLoading(false); // Set loading to false after images are loaded
    };
    loadImages();
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

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const paginatedImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <>
      <main className="bg-neutral-200" id="gallery">
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h2 className="text-center text-black text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Gall
              <Highlight className="bg-cyan-800 text-white">ery</Highlight>
              <br />
            </h2>
          </div>
        </section>
        {loading ? (
          <p className="text-center text-2xl border py-40 ">
            <FaTruckLoading /> Loading images....
          </p>
        ) : (
          <>
            <Pagination
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />

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
                    {paginatedImages.map((image, index) => (
                      <li
                        key={index}
                        className="relative group cursor-zoom-in"
                        onClick={() =>
                          openGallery(currentPage * imagesPerPage + index)
                        }
                      >
                        <img
                          onClick={() =>
                            openGallery(currentPage * imagesPerPage + index)
                          }
                          src={image.src}
                          loading="lazy"
                          className="object-cover select-none w-full h-auto bg-gray-200 rounded-xl cursor-zoom-in aspect-[5/6] lg:aspect-[1/3] xl:aspect-[3/4]"
                          alt={image.alt}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                          <p className="text-white text-center px-4">
                            {image.description}
                          </p>
                        </div>
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
                        className="object-cover w-fit h-fit select-none cursor-zoom-out"
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
            <Pagination
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )}
      </main>
    </>
  );
};

export default Gallery;
