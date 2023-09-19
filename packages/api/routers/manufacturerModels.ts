import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

const manufacturerModelsRouter = createTRPCRouter({
  getManufacturerModels: publicProcedure
    .input(z.object({ manufacturerId: z.string() }))
    .query(({ ctx, input }) => ctx.prisma.manufacturerModel.findMany({
      where: {
        manufacturerId: input.manufacturerId,
      },
      orderBy: {
        title: 'asc',
      },
    })),

  getManufacturerModelById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => ctx.prisma.manufacturerModel.findUnique({
      where: {
        id: input.id,
      },
    })),
})

export default manufacturerModelsRouter
