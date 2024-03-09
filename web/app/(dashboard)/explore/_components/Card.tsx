import Image from "next/image";

const MovieCard = () => {
    return (
        <div className="relative aspect-[3/4] lg:h-80 lg:w-60">
            <Image
                src={`/movies/shaitan.avif`}
                alt=""
                fill
                className="object-cover rounded-lg"
            />
        </div>
    );
};

export default MovieCard;
