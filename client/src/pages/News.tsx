import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X, ArrowLeft } from "lucide-react";
import { newsArticles, NewsItem } from "../data/gallery";
import SubscribeSection from "../components/subscribe/SubscribeSection";

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const featuredArticle = newsArticles.find((a) => a.id === "sympatex-acquisition") || newsArticles[0];

  const gridArticles = newsArticles
    .filter((article) => article.id !== featuredArticle.id)
    .filter((article) => {
      if (selectedCategory === "All") return true;
      if (selectedCategory === "Products") {
        return article.category === "Performance" || article.category === "Sustainability" || article.category === "Products";
      }
      if (selectedCategory === "Events") {
        return article.category === "Events";
      }
      if (selectedCategory === "Sponsorships") {
        return article.category === "Sponsorship";
      }
      return true;
    });

  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-36 pb-20 select-none relative">
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-brand z-[9999] pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              <div className="flex items-center text-sm text-neutral-400 select-none mb-12 font-body font-light lg:-ml-24">
                <span className="mr-2 text-neutral-500">categories:</span>
                <div className="flex items-center gap-1">
                  {["All", "Products", "Events", "Sponsorships"].map((cat, i) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <div key={cat} className="flex items-center">
                        <button
                          onClick={() => setSelectedCategory(cat)}
                          className={`cursor-pointer transition-colors text-sm font-light lowercase ${
                            isActive ? "text-[#e2de00] font-normal" : "text-white/60 hover:text-[#e2de00]"
                          }`}
                        >
                          {cat}
                        </button>
                        {i < 3 && <span className="text-neutral-700 mx-2">/</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {featuredArticle && (selectedCategory === "All" || selectedCategory === "Events") && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
                  <div className="lg:col-span-6 lg:-ml-24 flex flex-col items-start justify-start w-full">
                    <div
                      onClick={() => setSelectedArticle(featuredArticle)}
                      className="relative aspect-[4/3] lg:aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl cursor-pointer group"
                    >
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#e2de00]/30 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      <span className="absolute top-6 left-6 z-20 text-white font-display uppercase tracking-widest text-[10px] font-bold">
                        {featuredArticle.category === "Sponsorship" ? "Sponsorships" : featuredArticle.category}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex flex-col items-start space-y-3 text-left">
                    <span className="text-[10px] md:text-xs text-neutral-500 font-display tracking-wider font-semibold">
                      {featuredArticle.date}
                    </span>
                    <h2
                      onClick={() => setSelectedArticle(featuredArticle)}
                      className="font-display font-black text-2xl md:text-3xl lg:text-[40px] leading-[1.1] text-white tracking-tight cursor-pointer hover:text-[#e2de00] transition-colors"
                    >
                      {featuredArticle.title}
                    </h2>
                    <p className="text-neutral-400 font-body text-xs md:text-sm lg:text-base leading-relaxed max-w-xl">
                      {featuredArticle.excerpt}
                    </p>
                    <button
                      onClick={() => setSelectedArticle(featuredArticle)}
                      className="px-6 py-2.5 border border-[#e2de00] text-[#e2de00] rounded-full font-display uppercase text-xs tracking-widest hover:bg-[#e2de00] hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      read news
                    </button>
                  </div>
                </div>
              )}

              {gridArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  {gridArticles.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => setSelectedArticle(article)}
                      className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-brand/20 transition-smooth flex flex-col justify-between"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover opacity-70 group-hover:scale-102 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-[#e2de00]/30 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                      </div>

                      <div className="p-6 space-y-2 flex-grow flex flex-col justify-start">
                        <span className="text-[#e2de00] font-display uppercase tracking-widest text-[9px] font-semibold">
                          {article.category === "Sponsorship" ? "Sponsorships" : article.category}
                        </span>
                        <span className="text-white/45 text-[11px] font-body">
                          {article.date}
                        </span>
                        <h3 className="font-display text-lg font-bold group-hover:text-[#e2de00] transition-colors leading-snug line-clamp-2 pt-1">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-16 lg:-mx-12">
                <SubscribeSection />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="article"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center text-xs text-white/50 hover:text-brand transition-colors uppercase tracking-widest font-display"
              >
                <ArrowLeft size={14} className="mr-1.5" /> Back to list
              </button>

              <div className="relative aspect-video rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-xs font-display tracking-widest uppercase">
                  <span className="text-brand">{selectedArticle.category}</span>
                  <span className="text-white/40 flex items-center">
                    <Calendar size={12} className="mr-1" /> {selectedArticle.date}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-black leading-tight">
                  {selectedArticle.title}
                </h1>
                <p className="text-white/60 font-display text-lg italic border-l-2 border-brand pl-4 py-1 leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-white/70 text-sm md:text-base leading-relaxed space-y-6 font-body">
                {selectedArticle.content.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
