import Image from "next/image";

const MovieCard = (props: { title: string; img: string }) => {
    return (
        <div className="relative aspect-[2/3] h-90 w-60">
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
