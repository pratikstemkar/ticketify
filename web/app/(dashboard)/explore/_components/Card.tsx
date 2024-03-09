import Image from "next/image";

const MovieCard = (props: { title: string; img: string }) => {
    return (
        <div className="relative aspect-[3/4] lg:h-80 lg:w-60 hover:cursor-pointer">
            <Image
                src={`/movies/${props.img}`}
                alt={props.title}
                fill
                className="object-cover rounded-lg"
            />
        </div>
    );
};

export default MovieCard;
