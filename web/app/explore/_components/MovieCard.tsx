import Image from "next/image";

const MovieCard = (props: { title: string; img: string }) => {
    return (
        <div className="relative aspect-[2/3]">
            <Image
                src={`/posters/${props.img}`}
                alt={props.title}
                // width={300}
                // height={450}
                fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
            />
        </div>
    );
};

export default MovieCard;
