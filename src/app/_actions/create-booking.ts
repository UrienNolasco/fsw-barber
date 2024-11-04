"use server"

import { authOptions } from "@/_lib/auth"
import { db } from "@/_lib/prisma"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"

interface createBookingParams {
  userId: string
  serviceId: string
  date: Date
}

export const createBooking = async (params: createBookingParams) => {
  const user = await getServerSession(authOptions)

  if (!user) {
    throw new Error("User not found")
  }

  await db.booking.create({
    data: { ...params, userId: (user.user as any).id },
  })
  revalidatePath("/barbershop/[id]")
}
