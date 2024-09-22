import Image from "next/image";

const CarouselCard = (props: { title: string; img: string }) => {
    return (
        <div className="p-1">
            <Image
                src={`/carousels/${props.img}`}
                alt={props.title}
                width={1920}
                height={480}
                className="rounded-lg hover:cursor-pointer"
            />
        </div>
    );
};

export default CarouselCard;
