import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="container">
      <Slider />
      <Categories />
      <Products products={dawahProducts} title="DAWAH CANVAS" tag="dawah" />
      <Products products={attarProducts} title="ATTAR" tag="borka" />
      <Products products={jersyProducts} title="JERSY" tag="borka" />
      <Products products={borkaProducts} title="BORKA" tag="borka" />
    </main>
  );
}

const dawahProducts = [
  {
    image: "/books/1.webp",
    title: "Wall Frame-Cholo Rober Kache-WF012",
    oldPrice: 790,
    price: 550,
    rating: "4"
  },
  {
    image: "/books/2.webp",
    title: "Wall Frame-Bismillah-WF001",
    oldPrice: 790,
    price: 550,
    rating: "4"
  },
  {
    image: "/books/3.webp",
    title: "Wall Frame-Amader Paotaka-WF018",
    oldPrice: 790,
    price: 550,
    rating: "4"
  },
  {
    image: "/books/4.webp",
    title: "Wall Frame-Allahu Akbar-WF003",
    oldPrice: 790,
    price: 550,
    rating: "4"
  },
  {
    image: "/books/5.webp",
    title: "Wall Frame-Alhamdulillah-WF002",
    oldPrice: 790,
    price: 550,
    rating: "4"
  },
  {
    image: "/books/6.webp",
    title: "Wall Frame-Alhamdulillah Calligraphy-WF016",
    oldPrice: 790,
    price: 550,
    rating: "4"
  }
]

const attarProducts = [
  {
    image: "/attar/1.webp",
    title: "Arabian Oud - 6 ml (Crystal)",
    oldPrice: 1200,
    price: 720,
    rating: "4.5"
  },
  {
    image: "/attar/2.jpg",
    title: "Kasturi - 100 ml",
    oldPrice: 1200,
    price: 720,
    rating: "4.5"
  },
  {
    image: "/attar/3.webp",
    title: "Amir Al Oud - 6 ml (Crystal)",
    oldPrice: 1200,
    price: 720,
    rating: "4.5"
  },
  {
    image: "/attar/4.webp",
    title: "Escada Collection - 6 ml (Crystal)",
    oldPrice: 1200,
    price: 720,
    rating: "4.5"
  },
  {
    image: "/attar/5.webp",
    title: "Escada Collection - 6 ml (Crystal)",
    oldPrice: 1200,
    price: 720,
    rating: "4.5"
  },
  {
    image: "/attar/6.jpg",
    title: "Silver - 100 ml",
    oldPrice: 1200,
    price: 720,
    rating: "4.5"
  },
]

const jersyProducts = [
  {
    image: "/jersy/1.jpg",
    title: "Dawah Jersey - Islam for Better Life - 616",
    oldPrice: 2100,
    price: 1600,
    rating: "4.5"
  },
  {
    image: "/jersy/2.jpg",
    title: "Dawah Jersey - Never Give Up - 617",
    oldPrice: 2100,
    price: 1600,
    rating: "4.5"
  },
  {
    image: "/jersy/3.jpg",
    title: "Dawah Jersey - Badr - 602",
    oldPrice: 2100,
    price: 1600,
    rating: "4.5"
  },
  {
    image: "/jersy/4.jpg",
    title: "Dawah Jersey - Being Muslim - 618",
    oldPrice: 2100,
    price: 1600,
    rating: "4.5"
  },
  {
    image: "/jersy/5.jpg",
    title: "Dawah Jersey - Come to Deen - 610",
    oldPrice: 2100,
    price: 1600,
    rating: "4.5"
  },
  {
    image: "/jersy/6.webp",
    title: "Dawah Jersey - মুসাফির - 628",
    oldPrice: 2100,
    price: 1600,
    rating: "4.5"
  },
]

const borkaProducts = [
  {
    image: "/borka/1.jpg",
    title: "Mysori Abaya",
    oldPrice: 2100,
    price: 1600,
    rating: "3.5"
  },
  {
    image: "/borka/2.webp",
    title: "Simple Borka (Mocha)",
    oldPrice: 2100,
    price: 1600,
    rating: "3.5"
  },
  {
    image: "/borka/3.jpg",
    title: "Butterfly Hoodie Niqab",
    oldPrice: 2100,
    price: 1600,
    rating: "3.5"
  },
  {
    image: "/borka/4.jpg",
    title: "Awrah Abaya",
    oldPrice: 2100,
    price: 1600,
    rating: "3.5"
  },
  {
    image: "/borka/5.jpg",
    title: "Ayesha Borka",
    oldPrice: 2100,
    price: 1600,
    rating: "3.5"
  },
  {
    image: "/borka/6.jpg",
    title: "Plain Borka",
    oldPrice: 2100,
    price: 1600,
    rating: "3.5"
  },
]