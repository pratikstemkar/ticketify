import Image from "next/image";

const MovieCard = (props: { title: string; img: string }) => {
    return (
        <div className="relative aspect-[2/3] h-70 w-50 lg:h-90 lg:w-60 hover:cursor-pointer">
            <Image
                src={`/posters/${props.img}`}
                alt={props.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
            />
        </div>
    );
};

export default MovieCard;
