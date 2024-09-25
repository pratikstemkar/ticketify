import Image from "next/image";

const CarouselCard = (props: { title: string; img: string }) => {
    return (
        <div className="relative">
            <Image
                className="w-full object-cover rounded-md"
                src={`/carousels/${props.img}`}
                alt={props.title}
                width={1920}
                height={480}
            />
            <div className="absolute inset-y-0 px-10 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold">{props.title}</h2>
            </div>
        </div>
    );
};

export default CarouselCard;
