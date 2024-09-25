import { Button } from "@/components/ui/button";

const BusinessLanding = () => {
    return (
        <main className="flex items-center justify-center px-2 lg:px-0">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col items-center text-center space-y-5 justify-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter">
                        Do Business with Ease
                    </h1>
                    <h4 className="text-2xl font-bold text-muted-foreground">
                        Ticketify Business
                    </h4>
                    <p className="text-base lg:text-lg max-w-3xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod at rem quasi repudiandae dicta nulla atque
                        rerum nisi, officiis dolor, aut quam, maxime quo! Iusto
                        laudantium vero accusantium quibusdam doloremque! Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit.
                        Perspiciatis officiis perferendis qui sequi eligendi at,
                        velit totam? Iure libero hic autem quidem quasi quia id,
                        eligendi, rem quam aut reprehenderit.
                    </p>
                    <div>
                        <Button
                            size="lg"
                            className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                        >
                            <span>Start your Business</span>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BusinessLanding;
