"use server"

import { db } from "@/_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"

interface getBookingsProps {
  serviceId: number
  date: Date
}

export const getBookings = ({ date }: getBookingsProps) => {
  return db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  })
}
