"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Heart, ShoppingBag, Star, SlidersHorizontal, ChevronDown } from "lucide-react";

// ── Types ──────────────────────────────────────────────
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  isNew?: boolean;
}

// ── Mock Data ──────────────────────────────────────────
const products: Product[] = [
  // Hair Care
  { id: 1,  name: "Brahmi Hair Oil",            category: "Hair Care",            price: 279, originalPrice: 320, rating: 4.7, reviews: 201, image: "/assets/pure-ayurveda/spoon.jpg",   badge: "Popular" },
  { id: 2,  name: "Bhringraj Hair Mask",         category: "Hair Care",            price: 349,                     rating: 4.6, reviews: 102, image: "/assets/pure-ayurveda/spices.avif", isNew: true },
  // Skin Care
  { id: 3,  name: "Neem Face Wash",             category: "Skin Care",            price: 229,                     rating: 4.5, reviews: 67,  image: "/assets/pure-ayurveda/spices.avif", isNew: true },
  { id: 4,  name: "Kumkumadi Face Oil",          category: "Skin Care",            price: 599,                     rating: 4.8, reviews: 230, image: "/assets/pure-ayurveda/spice1.jpg",  badge: "Premium" },
  { id: 5,  name: "Aloe Vera Gel Pure",          category: "Skin Care",            price: 179, originalPrice: 220, rating: 4.4, reviews: 156, image: "/assets/pure-ayurveda/spice1.jpg" },
  // Bath & Body
  { id: 6,  name: "Sandalwood Body Scrub",       category: "Bath & Body",          price: 299, originalPrice: 369, rating: 4.6, reviews: 88,  image: "/assets/pure-ayurveda/spices.avif", badge: "Best Seller" },
  { id: 7,  name: "Ubtan Bathing Powder",        category: "Bath & Body",          price: 199,                     rating: 4.5, reviews: 74,  image: "/assets/pure-ayurveda/spoon.jpg",   isNew: true },
  // Joint & Muscle Care
  { id: 8,  name: "Mahanarayan Oil",            category: "Joint & Muscle Care",  price: 349, originalPrice: 420, rating: 4.7, reviews: 163, image: "/assets/pure-ayurveda/spice1.jpg",  badge: "Popular" },
  { id: 9,  name: "Shallaki Joint Capsules",    category: "Joint & Muscle Care",  price: 419,                     rating: 4.6, reviews: 97,  image: "/assets/pure-ayurveda/spices.avif" },
  // Oils
  { id: 10, name: "Sesame Tailam Cold Pressed", category: "Oils",                 price: 249, originalPrice: 299, rating: 4.8, reviews: 145, image: "/assets/pure-ayurveda/spoon.jpg",   badge: "Best Seller" },
  { id: 11, name: "Castor Oil Pure",            category: "Oils",                 price: 189,                     rating: 4.5, reviews: 112, image: "/assets/pure-ayurveda/spice1.jpg",  isNew: true },
  // Herbs
  { id: 12, name: "Ashwagandha Root Powder",   category: "Herbs",                price: 349, originalPrice: 449, rating: 4.8, reviews: 124, image: "/assets/pure-ayurveda/spices.avif", badge: "Best Seller" },
  { id: 13, name: "Moringa Leaf Powder",        category: "Herbs",                price: 319,                     rating: 4.7, reviews: 188, image: "/assets/pure-ayurveda/spices.avif" },
  { id: 14, name: "Amla Berry Extract",         category: "Herbs",                price: 259, originalPrice: 299, rating: 4.5, reviews: 93,  image: "/assets/pure-ayurveda/spoon.jpg",  isNew: true },
  // Immunity Booster
  { id: 15, name: "Tulsi Giloy Juice",          category: "Immunity Booster",     price: 299, originalPrice: 379, rating: 4.9, reviews: 312, image: "/assets/pure-ayurveda/spice1.jpg",  badge: "Best Seller" },
  { id: 16, name: "Chyawanprash Special",       category: "Immunity Booster",     price: 449,                     rating: 4.7, reviews: 145, image: "/assets/pure-ayurveda/spoon.jpg" },
  // Stress Relief
  { id: 17, name: "Brahmi Mind Calm Capsules",  category: "Stress Relief",        price: 369, originalPrice: 429, rating: 4.7, reviews: 109, image: "/assets/pure-ayurveda/spices.avif", badge: "Popular" },
  { id: 18, name: "Jatamansi Stress Oil",       category: "Stress Relief",        price: 299,                     rating: 4.5, reviews: 63,  image: "/assets/pure-ayurveda/spice1.jpg",  isNew: true },
  // Sexual Wellness
  { id: 19, name: "Shilajit Resin Pure",        category: "Sexual Wellness",      price: 799, originalPrice: 999, rating: 4.8, reviews: 217, image: "/assets/pure-ayurveda/spoon.jpg",   badge: "Premium" },
  { id: 20, name: "Safed Musli Capsules",       category: "Sexual Wellness",      price: 549,                     rating: 4.6, reviews: 88,  image: "/assets/pure-ayurveda/spices.avif" },
  // Women Care
  { id: 21, name: "Shatavari Capsules",         category: "Women Care",           price: 389, originalPrice: 450, rating: 4.6, reviews: 78,  image: "/assets/pure-ayurveda/spice1.jpg" },
  { id: 22, name: "Lodhra Hormonal Balance",    category: "Women Care",           price: 329,                     rating: 4.5, reviews: 91,  image: "/assets/pure-ayurveda/spoon.jpg",   isNew: true },
  // Metabolism & Gut Health
  { id: 23, name: "Triphala Churna",            category: "Metabolism & Gut",     price: 199,                     rating: 4.6, reviews: 89,  image: "/assets/pure-ayurveda/spice1.jpg",  isNew: true },
  { id: 24, name: "Hingvastak Digestive Mix",   category: "Metabolism & Gut",     price: 249, originalPrice: 299, rating: 4.5, reviews: 74,  image: "/assets/pure-ayurveda/spices.avif" },
  // Diabetes
  { id: 25, name: "Karela Jamun Juice",         category: "Diabetes",             price: 279, originalPrice: 349, rating: 4.6, reviews: 134, image: "/assets/pure-ayurveda/spoon.jpg",   badge: "Popular" },
  { id: 26, name: "Vijaysar Diabetes Capsules", category: "Diabetes",             price: 389,                     rating: 4.5, reviews: 67,  image: "/assets/pure-ayurveda/spice1.jpg" },
  // Cosmetics
  { id: 27, name: "Rose Glow Toner",            category: "Cosmetics",            price: 349, originalPrice: 399, rating: 4.7, reviews: 120, image: "/assets/pure-ayurveda/spices.avif", badge: "New" },
  { id: 28, name: "Turmeric Brightening Serum", category: "Cosmetics",            price: 499,                     rating: 4.8, reviews: 89,  image: "/assets/pure-ayurveda/spice1.jpg",  isNew: true },
];

const categories = [
  "All",
  "Hair Care",
  "Skin Care",
  "Bath & Body",
  "Joint & Muscle Care",
  "Oils",
  "Herbs",
  "Immunity Booster",
  "Stress Relief",
  "Sexual Wellness",
  "Women Care",
  "Metabolism & Gut",
  "Diabetes",
  "Cosmetics",
];

const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Top Rated", "Newest"];

// ── Star Rating ────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= Math.round(rating) ? "fill-[#f5a623] text-[#f5a623]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

// ── Product Card ───────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(74,140,28,0.14)] transition-all duration-300 hover:-translate-y-1">
      {/* Image area */}
      <div className="relative h-[200px] sm:h-[220px] bg-[#f4f8ee] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wide bg-[#5a9e1e] text-white px-2.5 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="text-[10px] font-bold uppercase tracking-wide bg-[#1a2a10] text-white px-2.5 py-1 rounded-full">
              New
            </span>
          )}
          {discount && (
            <span className="text-[10px] font-bold bg-[#e8f4d9] text-[#3d7a0e] px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all hover:scale-110"
        >
          <Heart size={15} className={wished ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#5a9e1e] mb-1">
          {product.category}
        </p>
        <h3 className="text-[14px] font-semibold text-[#1a2a10] leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-gray-400">({product.reviews})</span>
        </div>
        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[17px] font-bold text-[#1a2a10]">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-[12px] text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <button className="flex items-center gap-1.5 bg-[#5a9e1e] hover:bg-[#3d7a0e] text-white text-[12px] font-semibold px-3 py-2 rounded-xl transition-all duration-200 hover:shadow-[0_4px_12px_rgba(90,158,30,0.35)]">
            <ShoppingBag size={13} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const sorted = sortBy === "Featured"
    ? filtered
    : [...filtered].sort((a, b) => {
        if (sortBy === "Price: Low to High") return a.price - b.price || a.id - b.id;
        if (sortBy === "Price: High to Low") return b.price - a.price || a.id - b.id;
        if (sortBy === "Top Rated") return b.rating - a.rating || a.id - b.id;
        if (sortBy === "Newest") return ((b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)) || a.id - b.id;
        return a.id - b.id;
      });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .products-page { font-family: 'DM Sans', sans-serif; }
        .cat-scroll::-webkit-scrollbar { display: none; }
        .cat-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <main className="products-page">
        <Navbar />

        {/* ── HERO BANNER — full viewport height ──────── */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

          {/* BG image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/pure-ayurveda/products-packet.png"
              alt="Products background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay — same as original */}
            <div className="absolute inset-0 bg-[#1a2a10]/90" />
          </div>

          {/* Content — centred */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
            <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#9BBA3B] mb-4">
              Pure Ayurveda Store
            </p>
            <h1
              className="text-[2.8rem] sm:text-6xl md:text-7xl font-extrabold leading-[1.1] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#9BBA3B" }}
            >
              Our Products
            </h1>
            <p className="text-white/60 text-[14px] sm:text-[16px] max-w-[440px] leading-relaxed mb-8">
              Handcrafted with ancient wisdom — explore our full range of
              Ayurvedic formulations for mind, body &amp; soul.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-10">
              {[["28+", "Products"], ["100%", "Natural"], ["5★", "Rated"]].map(([val, label]) => (
                <div key={label} className="flex flex-col items-center">
                  <p className="text-[1.4rem] font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{val}</p>
                  <p className="text-[11px] text-white/50 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-8 text-[12px] text-white/35">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#9BBA3B]">Products</span>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-50">
            <div className="w-[1px] h-8 bg-white/50 animate-pulse" />
            <p className="text-[10px] text-white uppercase tracking-[0.15em]">Scroll</p>
          </div>
        </section>

        {/* ── PRODUCTS SECTION ────────────────────────── */}
        <section className="bg-[#fafdf6] py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">

            {/* ── Toolbar ── */}
            <div className="flex flex-col gap-4 mb-8">

              {/* Category pills — horizontally scrollable */}
              <div className="cat-scroll flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-[#5a9e1e] border-[#5a9e1e] text-white shadow-[0_4px_12px_rgba(90,158,30,0.28)]"
                        : "bg-white border-gray-200 text-[#444] hover:border-[#5a9e1e] hover:text-[#5a9e1e]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Count + sort row */}
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-400">
                  {sorted.length} product{sorted.length !== 1 ? "s" : ""}
                </span>

                {/* Sort dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-2 bg-white border border-gray-200 text-[12px] font-medium text-[#333] px-3.5 py-2 rounded-xl hover:border-[#5a9e1e] transition-all"
                  >
                    <SlidersHorizontal size={13} className="text-[#5a9e1e]" />
                    {sortBy}
                    <ChevronDown size={13} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] z-20 min-w-[190px] overflow-hidden">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setSortBy(opt); setSortOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 text-[12.5px] transition-colors ${
                            sortBy === opt
                              ? "bg-[#f3f8ed] text-[#5a9e1e] font-semibold"
                              : "text-[#333] hover:bg-gray-50"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── Grid ── */}
            {sorted.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {sorted.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-gray-400 text-[15px]">No products found in this category.</p>
              </div>
            )}

            {/* ── Load More ── */}
            {sorted.length > 0 && (
              <div className="text-center mt-12">
                <button className="inline-flex items-center gap-2 border-2 border-[#5a9e1e] text-[#5a9e1e] font-semibold text-[13px] px-8 py-3 rounded-full hover:bg-[#5a9e1e] hover:text-white transition-all duration-200">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}