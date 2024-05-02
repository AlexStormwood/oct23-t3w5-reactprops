// ES6/ESM/module project import syntax
import MovieCard from "./MovieCard.jsx";

// CommonJS/NodeJS project import syntax
// const MovieCard = require("./MovieCard.jsx");

let favouriteMovies = [
	"Aliens",
	"Dune",
	"Hot Fuzz",
	"Anchorman",
	"Lock Stock and 2 Smoking Barrels",
	"Shrek",
	"Pokemon",
	"Blazing Saddles",
	"Snatch",
	"Shrek 2",
	"The good, the bad, and the ugly",
	"Robocop",
	"Bladerunner",
	"Lord of the Rings 1-3"
];

export default function MovieList(){

	return (
	<section>
		{favouriteMovies.map((movie, index) => {
			return <MovieCard key={movie + "-" + index} elephant={movie} />
		})}
	</section>
	);
}


// export function SomeFunction(){

// }

// module.exports = {
// 	SomeFunction
// }

// module.exports = MovieList;

// import MovieList, {SomeFunction} from "thefile "