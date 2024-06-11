import Card from "./components/Card"
import Footer from "./components/Footer"
import { AnimatePresence } from "framer-motion"
import Blob from "./assets/blob.png"
import { data } from "./const"




function App() {

  const news = data.results

  return (
    <div className="px-2 flex flex-col justify-start items-center ">
    <img className="absolute md:hidden -top-40 -left-32 -z-10" width={600} src={Blob} alt="blob" />
    <div className="w-full md:w-1/2">
      <div className="pt-10 px-9">
      <h1 className="text-4xl font-semibold opacity-80">TheTechTalk</h1>
      <p className="text-base opacity-60">Unlocking the Future, One News at a Time</p>
      </div>
      <div className="pt-8 px-2 ">
      <AnimatePresence >
      {news.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </AnimatePresence>
      </div>
      </div>
        <Footer/>
    </div>
  )
}

export default App
