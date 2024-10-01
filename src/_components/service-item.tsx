import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface ServiceItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        {/* Imagem */}
        <div className="relative h-[110px] max-h-[110px] w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            fill
            alt={service.name}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Direita */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{service.name}</h3>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-400">
              {service.description}
            </p>
          </div>

          {/* Preço e Botão */}
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
