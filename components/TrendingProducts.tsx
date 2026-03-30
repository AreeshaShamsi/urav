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

const trendingProducts: Product[] = [
  { title: "Herbal Oil Medicine", image: "/assets/pure-ayurveda/tren-pro1.png", label: "Sale" },
  {
    title: "Herbal Oil Medicine",
    image: "/assets/pure-ayurveda/tren-pro2.png",
    label: "30% Off",
    labelClassName: "ayur-tpro-sale-off",
  },
  { title: "Herbal Oil Medicine", image: "/assets/pure-ayurveda/tren-pro3.png" },
  { title: "Herbal Oil Medicine", image: "/assets/pure-ayurveda/tren-pro4.png" },
];

function TrendingProductCard({
  product,
  liked,
  onToggleLike,
}: {
  product: Product;
  liked: boolean;
  onToggleLike: () => void;
}) {
  return (
    <div className="ayur-tpro-box ayur-trepro-box">
      <div className="ayur-tpro-img">
        <img src={product.image} alt={product.title} />
        <div className={`ayur-tpro-sale ${product.labelClassName ?? "ayur-tpro-sale-star"}`.trim()}>
          {product.label ? <p>{product.label}</p> : null}
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
            <del>$100</del>$50
          </p>
          <div className="ayur-tpro-star">
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

export function TrendingProducts() {
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});

  const toggleLike = (key: string) => {
    setLikedProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="ayur-bgcover ayur-trenproduct-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <SectionHeading kicker="Product" title="Trending Product" />
          </div>
        </div>
        <div className="row">
          {trendingProducts.map((product) => {
            const key = product.title + product.image;
            return (
              <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
                <TrendingProductCard
                  product={product}
                  liked={Boolean(likedProducts[key])}
                  onToggleLike={() => toggleLike(key)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="ayur-bgshape ayur-trenpro-bgshape">
        <img src="/assets/pure-ayurveda/bg-shape3.png" alt="shape" />
        <img src="/assets/pure-ayurveda/bg-leaf3.png" alt="leaf" />
      </div>
    </section>
  );
}