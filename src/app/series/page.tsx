import rawData from "@/data.json";

export interface Item {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg";
      width: 1000;
      height: 1500;
    };
  };
  releaseYear: number;
}

// Filtra, ordena y selecciona un subconjunto de los datos brutos para formar un nuevo arreglo de datos
const data = (rawData.entries as Item[])  // Convierte los datos brutos a un arreglo de elementos del tipo "Item"
  .filter((item) => item.releaseYear >= 2010 && item.programType === "series")
  // Filtra los elementos que tengan un año de lanzamiento mayor o igual a 2010 y que tengan programType igual a "series"
  .slice(0, 21)  // Selecciona los primeros 21 elementos después de filtrar
  .sort((a, b) => a.title.localeCompare(b.title));
  // Ordena los elementos en orden alfabético basado en el título

// Al final, "data" contendrá el arreglo resultante con los elementos filtrados, seleccionados y ordenados

export default function SeriesPage() {
  return (
    <section className="grid gap-4">
      <article className="bg-slate-800 py-4 text-xl text-white shadow-md">
        <div className="m-auto max-w-screen-md px-4">Popular Series</div>
      </article>
      <article className="m-auto max-w-screen-md p-4">
        <div className="gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] grid">
          {data.map((Item) => (
            <div key={Item.title} className="grid gap-2">
              <img
                alt={Item.title}
                height={Item.images["Poster Art"].height}
                width={Item.images["Poster Art"].width}
                src={Item.images["Poster Art"].url}
              />
              
              <p className="leading-5">{Item.title} </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
