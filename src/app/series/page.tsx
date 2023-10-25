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