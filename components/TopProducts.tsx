"use client";

import { useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Product = {
  title: string;
  image: string;
  label?: string;
  labelClassName?: string;
};

const topProducts: Product[] = [
  { title: "Black Organic Tea", image: "/assets/pure-ayurveda/product-img1.png", label: "Sale" },
  {
    title: "Loose Leaf Tea",
    image: "/assets/pure-ayurveda/product-img2.png",
    label: "30% Off",
    labelClassName: "ayur-tpro-sale-off",
  },
  { title: "Oolong Tea", image: "/assets/pure-ayurveda/product-img3.png" },
  { title: "Black Organic Tea", image: "/assets/pure-ayurveda/product-img4.png" },
  { title: "Green Tea", image: "/assets/pure-ayurveda/product-img5.png" },
  {
    title: "Sencha Tea",
    image: "/assets/pure-ayurveda/product-img6.png",
    label: "Trending",
    labelClassName: "ayur-tpro-sale-trend",
  },
];

function ProductCard({
  product,
  liked,
  onToggleLike,
}: {
  product: Product;
  liked: boolean;
  onToggleLike: () => void;
}) {
  return (
    <div className="ayur-tpro-box">
      <div className="ayur-tpro-img">
        <img src={product.image} alt={product.title} />

        <div className={`ayur-tpro-sale ${product.labelClassName ?? "ayur-tpro-sale-star"}`}>
          {product.label && <p>{product.label}</p>}

          <div className="ayur-tpro-like">
            <button
              type="button"
              className={liked ? "likeproduct" : ""}
              onClick={onToggleLike}
              aria-label={`Toggle ${product.title} wishlist`}
            >
              <Heart size={18} fill={liked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>

      <div className="ayur-tpro-text">
        <h3>
          <a href="#">{product.title}</a>
        </h3>

        <div className="ayur-tpro-price">
          <p>
            <del>$100</del> $50
          </p>

          <div className="ayur-tpro-star flex items-center gap-1">
            <Star size={14} fill="currentColor" />
            <p>4.5/5</p>
          </div>
        </div>

       <div className="ayur-tpro-btn">
          <a href="#" className="ayur-btn">
            <span>
              <ShoppingCart size={16} />
            </span>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export function TopProducts() {
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});

  const toggleLike = (key: string) => {
    setLikedProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="ayur-bgcover ayur-topproduct-sec">
      <div className="container">
        
        {/* HEADING */}
        <div className="row">
          <div className="col-12 text-center my-10">
            <SectionHeading
              kicker="Best For You"
              title="Our Top Products"
              className="text-[#7CB342]"
            />
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="row">
          {topProducts.map((product) => {
            const key = product.title + product.image;

            return (
              <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
                <ProductCard
                  product={product}
                  liked={Boolean(likedProducts[key])}
                  onToggleLike={() => toggleLike(key)}
                />
              </div>
            );
          })}
        </div>

        

      </div>

      {/* BACKGROUND */}
      <div className="ayur-bgshape ayur-tpro-bgshape">
        <img src="/assets/pure-ayurveda/bg-shape1.png" alt="shape" />
        <img src="/assets/pure-ayurveda/bg-leaf1.png" alt="leaf" />
      </div>
    </section>
  );
}
