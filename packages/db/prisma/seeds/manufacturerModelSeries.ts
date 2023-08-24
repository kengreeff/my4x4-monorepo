import type {
  Prisma, PrismaClient, ManufacturerModel, ManufacturerModelSeries,
} from '@prisma/client'

// Manufacturer Model Series
const seedFn = (prisma: PrismaClient, manufacturerModels: ManufacturerModel[]) => {
  // Ford Everest
  const fordEverest = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'ford_everest')

  const fordEverestSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'ford_everest_ua',
      title: 'UA',
      manufacturerModelId: fordEverest.id,
    },
    {
      key: 'ford_everest_UA2',
      title: 'UA2',
      manufacturerModelId: fordEverest.id,
    },
  ]

  // Ford F-150
  const fordF150 = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'ford_f150')

  const fordF150Series: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'ford_f150_1012',
      title: '1012',
      manufacturerModelId: fordF150.id,
    },
    {
      key: 'ford_f150_1022',
      title: '1022',
      manufacturerModelId: fordF150.id,
    },
  ]

  // Ford Ranger
  const fordRanger = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'ford_ranger')

  const fordRangerSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'ford_ranger_pj',
      title: 'PJ',
      manufacturerModelId: fordRanger.id,
    },
    {
      key: 'ford_ranger_pk',
      title: 'PK',
      manufacturerModelId: fordRanger.id,
    },
    {
      key: 'ford_ranger_px1',
      title: 'PX1',
      manufacturerModelId: fordRanger.id,
    },
    {
      key: 'ford_ranger_px2',
      title: 'PX2',
      manufacturerModelId: fordRanger.id,
    },
    {
      key: 'ford_ranger_px3',
      title: 'PX3',
      manufacturerModelId: fordRanger.id,
    },
    {
      key: 'ford_ranger_py',
      title: 'PY',
      manufacturerModelId: fordRanger.id,
    },
  ]

  // Ford Ranger Raptor
  const fordRangerRaptor = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'ford_ranger_raptor')

  const fordRangerRaptorSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'ford_ranger_raptor_px3',
      title: 'PX3',
      manufacturerModelId: fordRangerRaptor.id,
    },
    {
      key: 'ford_ranger_raptor_py',
      title: 'PY',
      manufacturerModelId: fordRangerRaptor.id,
    },
  ]

  // Ford Maverick
  const fordMaverick = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'ford_maverick')

  const fordMaverickSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'ford_maverick_y60',
      title: 'Y60',
      manufacturerModelId: fordMaverick.id,
    },
  ]

  // Holden Colorado
  const holdenColorado = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'holden_colorado')

  const holdenColoradoSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'holden_colorado_rc',
      title: 'RC',
      manufacturerModelId: holdenColorado.id,
    },
    {
      key: 'holden_colorado_rg',
      title: 'RG',
      manufacturerModelId: holdenColorado.id,
    },
  ]

  // Holden Rodeo
  const holdenRodeo = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'holden_rodeo')

  const holdenRodeoSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'holden_rodeo_tf',
      title: 'TF',
      manufacturerModelId: holdenRodeo.id,
    },
  ]

  // Isuzu D-MAX
  const isuzuDmax = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'isuzu_dmax')

  const isuzuDmaxSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'isuzu_dmax_rt',
      title: 'RT',
      manufacturerModelId: isuzuDmax.id,
    },
    {
      key: 'isuzu_dmax_rg',
      title: 'RG',
      manufacturerModelId: isuzuDmax.id,
    },
  ]

  // Isuzu MU-X
  const isuzuMux = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'isuzu_mux')

  const isuzuMuxSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'isuzu_mux_rj',
      title: 'RJ',
      manufacturerModelId: isuzuMux.id,
    },
  ]

  // Jeep Wrangler
  const jeepWrangler = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'jeep_wrangler')

  const jeepWranglerSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'jeep_wrangler_tj',
      title: 'TJ',
      manufacturerModelId: jeepWrangler.id,
    },
  ]

  // Land Rover Defender
  const landRoverDefender = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'land_rover_defender')

  const landRoverDefenderSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'land_rover_defender_110',
      title: '110',
      manufacturerModelId: landRoverDefender.id,
    },
    {
      key: 'land_rover_defender_130',
      title: 'TD5/130',
      manufacturerModelId: landRoverDefender.id,
    },
  ]

  // Land Rover Discovery
  const landRoverDiscovery = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'land_rover_discovery')

  const landRoverDiscoverySeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'land_rover_discovery_series_1',
      title: 'Series 1',
      manufacturerModelId: landRoverDiscovery.id,
    },
    {
      key: 'land_rover_discovery_series_2_l318',
      title: 'Series 2 (L318)',
      manufacturerModelId: landRoverDiscovery.id,
    },
    {
      key: 'land_rover_discovery_series_l3_l319',
      title: 'LR3 (L319)',
      manufacturerModelId: landRoverDiscovery.id,
    },
  ]

  // Land Rover Range Rover
  const landRoverRangeRover = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'land_rover_range_rover')

  const landRoverRangeRoverSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'land_rover_range_rover_classic',
      title: 'Classic',
      manufacturerModelId: landRoverRangeRover.id,
    },
    {
      key: 'land_rover_range_rover_p38a',
      title: 'P38A',
      manufacturerModelId: landRoverRangeRover.id,
    },
  ]

  // Mazda BT-50
  const mazdaBt50 = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'mazda_bt50')

  const mazdaBt50Series: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'mazda_bt50_ur',
      title: 'UR',
      manufacturerModelId: mazdaBt50.id,
    },
    {
      key: 'mazda_bt50_up',
      title: 'UP',
      manufacturerModelId: mazdaBt50.id,
    },
    {
      key: 'mazda_bt50_tf',
      title: 'TF',
      manufacturerModelId: mazdaBt50.id,
    },
  ]

  // Mitsubishi Pajero
  const mitsubishiPajero = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'mitsubishi_pajero')

  const mitsubishiPajeroSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'mitsubishi_pajero_np',
      title: 'NP',
      manufacturerModelId: mitsubishiPajero.id,
    },
    {
      key: 'mitsubishi_pajero_ns',
      title: 'NS',
      manufacturerModelId: mitsubishiPajero.id,
    },
  ]

  // Mitsubishi Triton
  const mitsubishiTriton = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'mitsubishi_triton')

  const mitsubishiTritonSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'mitsubishi_triton_mq',
      title: 'MQ',
      manufacturerModelId: mitsubishiTriton.id,
    },
    {
      key: 'mitsubishi_triton_mr',
      title: 'MR',
      manufacturerModelId: mitsubishiTriton.id,
    },
  ]

  // Nissan Navara
  const nissanNavara = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'nissan_navara')

  const nissanNavaraSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'nissan_navara_d22',
      title: 'D22',
      manufacturerModelId: nissanNavara.id,
    },
    {
      key: 'nissan_navara_d40',
      title: 'D40',
      manufacturerModelId: nissanNavara.id,
    },
    {
      key: 'nissan_navara_d23',
      title: 'D23/NP300',
      manufacturerModelId: nissanNavara.id,
    },
  ]

  // Nissan Patrol
  const nissanPatrol = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'nissan_patrol')

  const nissanPatrolSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'nissan_patrol_mq',
      title: 'MQ',
      manufacturerModelId: nissanPatrol.id,
    },
    {
      key: 'nissan_patrol_y60',
      title: 'GQ/Y60',
      manufacturerModelId: nissanPatrol.id,
    },
    {
      key: 'nissan_patrol_y61',
      title: 'GU/Y61',
      manufacturerModelId: nissanPatrol.id,
    },
    {
      key: 'nissan_patrol_y62',
      title: 'Y62',
      manufacturerModelId: nissanPatrol.id,
    },
  ]

  // Suzuki Jimny
  const suzukiJimny = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'suzuki_jimny')

  const suzukiJimnySeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'suzuki_jimny_jb74',
      title: 'JB74',
      manufacturerModelId: suzukiJimny.id,
    },
  ]

  // Toyota LandCruiser
  const toyotaLandCruiser = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'toyota_land_cruiser')

  const toyotaLandCruiserSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'toyota_land_cruiser_75',
      title: '75',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_76',
      title: '76',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_78',
      title: '78',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_79',
      title: '79',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_80',
      title: '80',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_45',
      title: '45',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_100',
      title: '100',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_105',
      title: '105',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_200',
      title: '200',
      manufacturerModelId: toyotaLandCruiser.id,
    },
    {
      key: 'toyota_land_cruiser_300',
      title: '300',
      manufacturerModelId: toyotaLandCruiser.id,
    },
  ]

  // Toyota Hilux
  const toyotaHilux = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'toyota_hilux')

  const toyotaHiluxSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'toyota_hilux_n40',
      title: 'N40',
      manufacturerModelId: toyotaHilux.id,
    },
    {
      key: 'toyota_hilux_n50',
      title: 'N50/LN106',
      manufacturerModelId: toyotaHilux.id,
    },
    {
      key: 'toyota_hilux_n60',
      displayTitle: 'N60/LN167',
      title: 'N60/LN110/RN110/LN167/LN166/KZN165/KUN26R',
      manufacturerModelId: toyotaHilux.id,
    },
    {
      key: 'toyota_hilux_n70',
      title: 'N70',
      manufacturerModelId: toyotaHilux.id,
    },
    {
      key: 'toyota_hilux_n80',
      title: 'N80',
      manufacturerModelId: toyotaHilux.id,
    },
  ]

  // Toyota Prado
  const toyotaPrado = manufacturerModels.find(manufacturerModel => manufacturerModel.key === 'toyota_prado')

  const toyotaPradoSeries: Prisma.ManufacturerModelSeriesCreateArgs['data'][] = [
    {
      key: 'toyota_prado_150',
      title: '150',
      manufacturerModelId: toyotaPrado.id,
    },
  ]

  // Merge Series
  const mergedSeries = [
    ...fordEverestSeries,
    ...fordF150Series,
    ...fordMaverickSeries,
    ...fordRangerRaptorSeries,
    ...fordRangerSeries,
    ...holdenColoradoSeries,
    ...holdenRodeoSeries,
    ...isuzuDmaxSeries,
    ...isuzuMuxSeries,
    ...jeepWranglerSeries,
    ...landRoverDefenderSeries,
    ...landRoverDiscoverySeries,
    ...landRoverRangeRoverSeries,
    ...mazdaBt50Series,
    ...mitsubishiPajeroSeries,
    ...mitsubishiTritonSeries,
    ...nissanNavaraSeries,
    ...nissanPatrolSeries,
    ...suzukiJimnySeries,
    ...toyotaHiluxSeries,
    ...toyotaLandCruiserSeries,
    ...toyotaPradoSeries,
  ]
  const queries = mergedSeries.map(async (data: Prisma.ManufacturerModelSeriesCreateArgs['data']) => {
    const record = await prisma.manufacturerModelSeries.upsert({
      where: { key: data.key },
      update: data,
      create: data,
    })

    return record
  })

  return queries
}

export default seedFn
