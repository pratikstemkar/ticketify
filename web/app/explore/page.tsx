import { ExplorePagination } from "./_components/ExplorePagination";
import { LandingCarousel } from "./_components/LandingCarousel";

const ExplorePage = () => {
    return (
        <main className="flex flex-col max-w-7xl m-auto space-y-5">
            <LandingCarousel />
            <div>Haha</div>
            <ExplorePagination />
        </main>
    );
};

export default ExplorePage;
