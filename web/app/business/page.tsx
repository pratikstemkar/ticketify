import { Button } from "@/components/ui/button";

const BusinessLanding = () => {
    return (
        <main className="flex flex-col max-w-7xl m-auto space-y-5 mt-20">
            <div className="flex flex-col space-y-2 items-center">
                <h1 className="text-6xl font-extrabold tracking-tighter">
                    Ticketify Business
                </h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vitae maiores labore dolores a aspernatur quidem tempora
                    ratione velit ipsum iste aliquid molestiae possimus delectus
                    illum eligendi dolore, iusto officiis! Magnam?
                </p>
                <Button>Join Ticketify Business</Button>
            </div>
        </main>
    );
};

export default BusinessLanding;
