import { Button } from "@mui/material";
import hero from "../../assets/imgs/hero_1.jpg";

export default function Hero() {
    return (
        <div className="relative min-h-[600px]">

            <img
                src={hero}
                alt="hero"
                className="w-full h-full object-cover absolute inset-0"
            />

            <div className="absolute right-0 top-1/2 -translate-y-1/2 p-8 bg-black/50 text-black max-w-[600px] backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 md:mr-16">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Finding Your Perfect Shoes
                    </h2>
                    <p className="text-lg md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam.
                        Integer accumsan tincidunt fringilla.
                    </p>
                    <Button
                        variant="contained"
                        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-none uppercase font-bold transition-all">
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    )
}