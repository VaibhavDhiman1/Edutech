import React, { useRef, forwardRef, useState, useEffect } from "react"; // Fixed: Added useState and useEffect
import material from '../components/Material/MaterialPage/mostlyliked';
import mostlyliked from "../components/Material/MaterialPage/mostlyliked";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Testimonials from "../components/Home/Testimonials";

// Card component (No changes needed here)
const Card = ({ image, title, description, tags, price, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-md w-full overflow-hidden"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-t-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/e5e7eb/4b5563?text=Image+Not+Found"; }}
            />
            <div className="p-3">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600 mb-3">{description}</p>
                {tags && Array.isArray(tags) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-xs bg-pink-100 rounded-full px-3 py-1 text-gray-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                {typeof price === "number" && (
                    <div>
                        <span className="text-md font-semibold text-gray-800">${price}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

// SectionHeader component (No changes)
const SectionHeader = ({ title, onScrollLeft, onScrollRight }) => {
    return (
        <div
            className="
                px-4 sm:px-8 md:px-12 lg:px-16 
                mt-8 sm:mt-12 md:mt-16 lg:mt-20
                flex items-center justify-between
            "
        >
            <h2
                className="
                    font-semibold 
                    text-lg sm:text-xl md:text-2xl lg:text-3xl
                "
            >
                {title}
            </h2>
            <div className="flex space-x-2">
                <button
                    onClick={onScrollLeft}
                    className="
                        p-2 sm:p-3 
                        rounded-full 
                        w-8 h-8 sm:w-10 sm:h-10 
                        border border-gray-300 hover:border-gray-600 
                        shadow-md flex items-center justify-center
                        transition-colors duration-200
                    "
                    aria-label="Scroll Left"
                >
                    <GoArrowLeft className="text-lg sm:text-xl" />
                </button>
                <button
                    onClick={onScrollRight}
                    className="
                        p-2 sm:p-3 
                        rounded-full 
                        w-8 h-8 sm:w-10 sm:h-10 
                        border border-gray-300 hover:border-gray-600 
                        shadow-md flex items-center justify-center
                        transition-colors duration-200
                    "
                    aria-label="Scroll Right"
                >
                    <GoArrowRight className="text-lg sm:text-xl" />
                </button>
            </div>
        </div>
    );
};


// CardSlider component (No changes)
const CardSlider = forwardRef(({ data }, ref) => {
    return (
        <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 mt-4 sm:mt-6 md:mt-8">
            <div
                ref={ref}
                className="flex space-x-4 sm:space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
                {data.map((material, index) => (
                    <div key={index} className="snap-start flex-shrink-0 w-[280px] sm:w-[320px]">
                        <Card
                            image={material.image}
                            title={material.title}
                            description={material.description}
                            tags={material.tags}
                            price={material.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
});

// The main App component
const Formecion = () => {
    const webinarsRef = useRef(null);
    const coursesRef = useRef(null);

    // --- Start of Moved Logic ---
    // This logic was incorrectly placed inside a nested function.
    // It's now at the top level of the Formecion component where it belongs.

    const partners = [
        { img: "/School/669fab92f9f5f07cc3e09ef8_logo-method.svg.svg", alt: "Partner 1" },
        { img: "/School/669fab9ea5868389244b7417_logo-recall.svg fill.svg", alt: "Partner 2" },
        { img: "/School/67b0ce85c98b23813ae581d4_logo-bambuser.svg fill.svg", alt: "Partner 3" },
        { img: "/School/66cdfcbe778e42d9f068993c_logo-veed.svg fill.svg", alt: "Partner 4" },
        { img: "/School/669fabd7fc0afa2e80be301f_logo-alan.svg.svg", alt: "Partner 5" },
        { img: "/School/67aa69ac4b01577f54ae91e3_logo-citibank.svg.svg", alt: "Partner 6" },
        { img: "/School/67b0ce5dbb0e44bc6109ad7c_logo-attention.svg.svg", alt: "Partner 7" },
    ];

    const teachers = [
        { img: "/School/unsplash_DH_u2aV3nGM.svg", name: "Steve K.", description: "ellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt." },
        { img: "/School/unsplash_DH_u2aV3nGM (1).svg", name: "Jeremy Sil", description: "ellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt." },
        { img: "/School/unsplash_DH_u2aV3nGM (2).svg", name: "Theri Jacobs", description: "ellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt." },
        { img: "/School/unsplash_DH_u2aV3nGM (3).svg", name: "Amrit Goyal", description: "ellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt." },
        { img: "/School/unsplash_DH_u2aV3nGM (1).svg", name: "Alice R.", description: "ellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt." },
        { img: "/School/unsplash_DH_u2aV3nGM (2).svg", name: "Bob M.", description: "ellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerRow, setItemsPerRow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) setItemsPerRow(4);
            else if (width >= 768) setItemsPerRow(2);
            else setItemsPerRow(1);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, teachers.length - itemsPerRow) : prevIndex - 1
        );
    };

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= teachers.length - itemsPerRow ? 0 : prevIndex + 1
        );
    };

    const visibleTeachers = teachers.slice(
        currentIndex,
        currentIndex + itemsPerRow
    );
    // --- End of Moved Logic ---

    const handleScroll = (ref, direction) => {
        if (ref.current && ref.current.children.length > 0) {
            const card = ref.current.children[0];
            const gap = parseInt(window.getComputedStyle(ref.current).gap, 10) || 24;
            const scrollAmount = card.offsetWidth + gap;

            if (direction === "left") {
                ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 pb-16">
            <header className="py-8 sm:py-10 md:py-12 bg-white flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Formación
                </h1>
                <div className="mt-6 sm:mt-8 relative w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5">
                    <input
                        type="text"
                        placeholder="Explore"
                        className="w-full py-3 pl-6 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    />
                    {/* Corrected button styling for a better look and size */}
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors">
                        <img
                            src="/Searchbar/Button.svg"
                            alt="Search"
                            className="h-5 w-5"
                        />
                    </button>
                </div>
            </header>

            <div className="mt-12">
                <SectionHeader
                    title="Webinars"
                    onScrollLeft={() => handleScroll(webinarsRef, "left")}
                    onScrollRight={() => handleScroll(webinarsRef, "right")}
                />
                <CardSlider ref={webinarsRef} data={mostlyliked} />
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10">
                <SectionHeader
                    title="Courses (Certificates awarded)"
                    onScrollLeft={() => handleScroll(coursesRef, "left")}
                    onScrollRight={() => handleScroll(coursesRef, "right")}
                />
                <CardSlider ref={coursesRef} data={material} />
            </div>

            <div className="mt-20 px-4 text-center py-8">
                <h1 className="text-5xl font-semibold mb-6">Who We Work With</h1>
                <p className="max-w-3xl mx-auto text-gray-500 text-base font-medium mb-10">
                    ntium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    quintium voluptatum deleniti atque corr
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {partners.map((partner, i) => (
                        <img
                            key={i}
                            src={partner.img}
                            alt={partner.alt}
                            className="w-40 sm:w-18 md:w-28 lg:w-32 h-auto object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className="w-full bg-[#FDF2F2] mb-16 py-24 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-bold text-4xl sm:text-5xl text-gray-800 mb-20">
                        Meet Our Teachers
                    </h1>
                    <div className="relative flex items-center justify-center px-6 sm:px-24">
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent border border-gray-400 rounded-full p-3 shadow-sm hover:bg-white/50 transition-colors z-10"
                            aria-label="Previous Teachers"
                        >
                            <GoArrowLeft className="text-gray-500 text-2xl" />
                        </button>
                        <div className="flex gap-4 md:gap-6 w-full justify-center overflow-hidden">
                            {visibleTeachers.map((teacher, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center px-2 transition-transform duration-300"
                                    style={{ flex: `0 0 calc(${100 / itemsPerRow}% - 1rem)` }}
                                >
                                    <img
                                        src={teacher.img}
                                        alt={teacher.name}
                                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full mb-6 object-cover shadow-md"
                                    />
                                    <div className="w-2/3 border-t border-gray-300 mb-6"></div>
                                    <h2 className="font-semibold text-xl sm:text-2xl text-gray-800">
                                        {teacher.name}
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-500 mt-3 px-2">
                                        {teacher.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent border border-gray-400 rounded-full p-3 shadow-sm hover:bg-white/50 transition-colors z-10"
                            aria-label="Next Teachers"
                        >
                            <GoArrowRight className="text-gray-500 text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

        <Testimonials />
        </div>
    );
};

export default Formecion;