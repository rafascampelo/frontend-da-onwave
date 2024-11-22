import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Dados dos serviços e produtos
const servicesAndProducts = [
  {
    id: 1,
    type: "service",
    name: "Serviço 1",
    legend: "Descrição do serviço 1",
  },
  {
    id: 3,
    type: "service",
    name: "Serviço 2",
    legend: "Descrição do serviço 2",
  },
];

// Separando serviços e produtos
const services = servicesAndProducts.filter((item) => item.type === "service");

export default function SellsLayout({ children }) {
  return (
    <div>
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
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 pt-4 w-full">
          {/* Carrossel de Serviços */}
          <h2 className="text-2xl text-blue-500 text-[28px] font-extrabold leading-[38px] ">
            Serviços
          </h2>
          <Carousel className="w-full max-w-xs" opts={{ align: "start" }}>
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col bg-white w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center cursor-pointer ">
                    <Image
                      src="/Bservico.png"
                      alt={service.name}
                      width={55}
                      height={55}
                      className="rounded-lg"
                    />
                    <h3 className="text-lg font-bold  text-blue-600/90 text-center">
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
          <Link href="/serviceScreen">
            <div className="bg-blue-500 rounded-full text-white font-bold px-10 py-4 my-4 hover:bg-blue-600 transition-all duration-300">
              Confirmar
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
