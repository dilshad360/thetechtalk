import Card from "./components/Card";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import Blob from "./assets/blob.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardProps } from "./types/cardProps";
import Loader from "./components/Loader";

function App() {
  const [news, setNews] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_NEWS_API_URL, {
          headers: {
            "api-key": import.meta.env.VITE_NEWS_API_KEY,
          },
        });

        setNews(response.data);
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="px-2 flex flex-col items-center justify-between min-h-screen ">
      <>
      <motion.img
        initial={{
          opacity: 0,
          scale: 0,
          rotate: 180
        }}
        whileInView={{ opacity: 1, scale:1,  rotate: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute md:hidden -top-40 -left-32 -z-10"
        width={600}
        src={Blob}
        alt="blob"
      />
      <div className="w-full md:w-1/2">
        <div className="pt-10 px-9">
          <h1 className="text-4xl font-semibold opacity-80">TheTechTalk</h1>
          <p className="text-base opacity-60">
            Unlocking the Future, One News at a Time
          </p>
        </div>
        <div className="pt-8 px-2 ">
          <AnimatePresence>
            {news.length ? (
              <div>
                {news.map((item, index) => (
                  <Card key={index} {...item} />
                ))}
              </div>
            ) : (
              <Loader/>
            )}
          </AnimatePresence>
        </div>
      </div>
      </>   
      <Footer />
    </div>
  );
}

export default App;
