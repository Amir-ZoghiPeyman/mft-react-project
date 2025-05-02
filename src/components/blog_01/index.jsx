import { Button } from "@mui/material"
import blog from "../../assets/imgs/blog_1.jpg"

export default function Blog_01() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <hr className="border-2 border-blue-600 w-20 mx-auto" />
                <h3 className="text-center text-3xl font-bold mt-4">Big Sale!</h3>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <article className="relative overflow-hidden rounded-xl group">
                    <img
                        src={blog}
                        alt="Sale promotion"
                        className="w-full h-full object-cover aspect-video lg:aspect-auto transition-transform duration-300 group-hover:scale-105"
                    />
                </article>

                <article className="space-y-6 text-center lg:text-left">
                    <h3 className="text-4xl font-bold text-blue-600">
                        50% Off All Items
                    </h3>

                    <p className="text-gray-600 uppercase tracking-wide">
                        By Carl Smith • September 3, 2018
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quisquam iste dolor accusantium facere corporis ipsum animi
                        deleniti fugiat. Ex, veniam?
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <Button
                            variant="contained"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-none uppercase font-bold transition-all shadow-md hover:shadow-lg"
                            sx={{
                                '&:hover': {
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Shop Now
                        </Button>
                    </div>
                </article>
            </div>
        </section>
    )
}