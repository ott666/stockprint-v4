// 1. import the data
import products from '@/data/products.json'

// 2. the selected genre will be coming from a container component.
type Props = {
  selectedGenre: string;
  onSelect(genre: string): void;
};

const GenerosProdutos = ({ selectedGenre, onSelect }: Props) => {
  //3. lines 11-12 - get all the unique genres from the movie list
  const splitGenres = products.flatMap((produto) => produto.genre.split("|"));
  const genres = Array.from(new Set(splitGenres));

  return (
      
      <ul className='font-sans font-bold p-[15px] bg-slate-100 mt-[30px] rounded-xl
      flex flex-col sm:flex-row w-full flex-wrap
      justify-evenly 
      '>
        {/* "All" for no filter */}
        <li
          className={!selectedGenre ? "bg-blue-600 text-white px-3 py-1 rounded-xl" : "text-blue-600 p-2 hover:bg-blue-600 hover:text-white hover:px-3 hover:py-1 hover:rounded-xl"}
          onClick={() => onSelect("")}
        >
          <a className="cursor-pointer capitalize text-3xl">
            Todos
          </a>
        </li>
        {/* map through all genres */}
        {genres.map((genre, i) => {
          const isSelected = genre === selectedGenre;
          return (
            <li
              key={i}
              // use a different class if the genre is selected.
              className={isSelected ? "bg-blue-600 text-white px-3 py-1 rounded-xl" : "text-blue-600 p-2 hover:bg-blue-600 hover:text-white hover:px-3 hover:py-1 hover:rounded-xl"}
              // attach the onSelect handler
              onClick={() => onSelect(genre)}
            >
              <a className={`cursor-pointer capitalize text-3xl `}>
                {genre}
              </a>
            </li>
            
          );
        })}
      </ul>
   
  );
};
export default GenerosProdutos