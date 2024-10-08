
import Image from "next/image";
import Link from "next/link";
import {Poppins} from 'next/font/google';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const poppins  = Poppins({
  subsets:['latin'],
  weight:["100","200","300","400","500","600","700","800","900"],
  style: "normal"
})
// Dados dos serviços e produtos
const servicesAndProducts = [
  {
    id: 1,
    type: "service",
    name: "Serviço 1",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 1",
  },
  {
    id: 2,
    type: "product",
    name: "Produto 1",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 1",
  },
  {
    id: 3,
    type: "service",
    name: "Serviço 2",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 2",
  },
  {
    id: 4,
    type: "product",
    name: "Produto 2",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 2",
  },
];

// Separando serviços e produtos
const services = servicesAndProducts.filter((item) => item.type === "service");
const products = servicesAndProducts.filter((item) => item.type === "product");


export default function RootLayout({ children }) {

  return (

    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="bg-gray-200 w-auto h-auto ">
          <div className="flex flex-col items-center justify-center ">
            {children}
            <div className="absolute top-5 left-3">
              <Link href="/homeScreen">
                <Image
                  src="/voltar.png"
                  alt="Voltar"
                  className="dark:invert pb-2"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
            </div>
            <div className="flex flex-col items-center mt-12 w-full">
              {/* Carrossel de Serviços */}
              <h2 className="text-2xl text-blue-500 text-[28px] font-extrabold leading-[38px] pb-6">
                Serviços
              </h2>
              <Carousel className="w-full max-w-xs" opts={{ align: "start" }}>
                <CarouselContent>
                  {services.map((service) => (
                    <CarouselItem
                      key={service.id}
                      className="basis-1/2 lg:basis-1/3"
                    >
                      <div
                        className="flex flex-col bg-white shadow-md w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center cursor-pointer ">
                        <Image
                          src={service.imageUrl}
                          alt={service.name}
                          width={85}
                          height={85}
                          className="rounded-lg"
                        />
                        <h3 className="text-lg font-bold mt-2 text-blue-600/90 text-center">
                          {service.name}
                        </h3>
                        <p className="text-sm text-bold text-center px-3 text-blue-400">
                          {service.legend}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Carrossel de Produtos */}
              <h2 className="text-2xl text-blue-500 text-[28px] font-extrabold leading-[38px] pb-6 pt-8">
                Produtos
              </h2>
              <Carousel
                className="w-full max-w-xs pb-32"
                opts={{ align: "start" }}
              >
                <CarouselContent>
                  {products.map((product) => (
                    <CarouselItem
                      key={product.id}
                      className="basis-1/2 lg:basis-1/3"
                    >
                      <div
                        className="flex flex-col bg-white shadow-md w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center cursor-pointer"
                      >
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={50}
                          height={50}
                        />
                        <h3 className="text-lg font-bold mt-2 text-blue-600/90 text-center">
                          {product.name}
                        </h3>
                        <p className="text-sm text-bold text-center px-3 text-blue-400">
                          {product.legend}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <Link href="/paymentScreen">
              <div className="bg-blue-500 relative bottom-16 rounded-full text-white font-bold px-10 py-4  hover:bg-blue-600 transition-all duration-300">
                Confirmar
              </div>
            </Link>
          </div>
        </div>
      </body>
    </html>

  );
}
