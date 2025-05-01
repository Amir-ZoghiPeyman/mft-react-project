import cloth_children from "../../assets/imgs/cloth_children.jpg";
import cloth_men from "../../assets/imgs/cloth_men.jpg";
import cloth_women from "../../assets/imgs/cloth_women.jpg";

export default function Feature_01() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <article className="relative group overflow-hidden rounded-xl h-96 cursor-pointer">
                    <img
                        src={cloth_men}
                        alt="Men's fashion collection"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white space-y-1">
                        <p className="text-sm uppercase tracking-widest opacity-80">Collections</p>
                        <h3 className="text-2xl font-bold">Men</h3>
                    </div>
                </article>

                <article className="relative group overflow-hidden rounded-xl h-96 cursor-pointer">
                    <img
                        src={cloth_children}
                        alt="Children's fashion collection"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white space-y-1">
                        <p className="text-sm uppercase tracking-widest opacity-80">Collections</p>
                        <h3 className="text-2xl font-bold">Children</h3>
                    </div>
                </article>

                <article className="relative group overflow-hidden rounded-xl h-96 cursor-pointer">
                    <img
                        src={cloth_women}
                        alt="Women's fashion collection"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white space-y-1">
                        <p className="text-sm uppercase tracking-widest opacity-80">Collections</p>
                        <h3 className="text-2xl font-bold">Women</h3>
                    </div>
                </article>
            </div>
        </section>
    )
}