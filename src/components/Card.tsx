import { motion } from "framer-motion";
import { CardProps } from "../types/cardProps";
import placeHolder from "../assets/placeholder.jpg";
import { truncateDescription } from "../utils/truncateDescription";



function Card(item: CardProps) {
    return (
        <a href={item.link}>
            <motion.div
                className="shadow-lg  h-[260px] rounded-2xl relative border mt-6 hover:shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div
                    className="w-full h-full bg-cover bg-center rounded-xl absolute "
                    style={{
                        backgroundImage: `url(${item.image_url ? item.image_url : placeHolder
                            })`,
                    }}
                ></div>
                <div className="absolute p-2 flex flex-col justify-between items-end h-full w-full">
                    <a href={item.source_url}>
                        <div className="bg-[#ffffffe8] p-1 rounded-full">
                            <img
                                className="w-6 h-6 rounded-full"
                                src={item.source_icon? item.source_icon : placeHolder}
                                alt="icon"
                            />
                        </div>
                    </a>
                    <div
                        className="bg-white px-4 py-2 rounded-lg w-full border border-gray-300 border-opacity-50
    bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70"
                    >
                        <h4 className="text-base font-semibold">{item.title}</h4>
                        <p className="text-sm font-light">
                            {truncateDescription(
                                item.description,
                                item.image_url ? 120 : 240
                            )}
                        </p>
                    </div>
                </div>
            </motion.div>
        </a>
    );
}

export default Card;
