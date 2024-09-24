import { Suspense } from "react";
import MovieList from "../_components/MovieList";

const MoviesPage = () => {
    return (
        <main className="max-w-7xl m-auto w-full px-2 lg:px-0">
            <div className="flex-col space-y-5">
                <h1 className="font-extrabold text-4xl tracking-tighter">
                    Movies
                </h1>
                <Suspense fallback={<>Loading...</>}>
                    <MovieList />
                </Suspense>
            </div>
        </main>
    );
};

export default MoviesPage;
