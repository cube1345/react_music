import hyRequest from '@/service'

interface BannerData {
  banners: {
    imageUrl: string
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
    url: string
    [key: string]: any
  }[]
  code: number
}

export function getBanners() {
  return hyRequest.get<BannerData>({
    url: '/banner',
    headers,
  })
}
