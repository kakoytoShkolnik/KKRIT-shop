import { ICartItem } from '@/types/cart'

export const getFirstImageUrl = (cartItem: ICartItem): string => {
  const { image } = cartItem

  if (!image) return '/images/placeholder.png'

  // Сценарий 1: массив объектов
  if (Array.isArray(image)) {
    const firstImage = image[0]
    if (firstImage && typeof firstImage === 'object' && 'url' in firstImage) {
      return firstImage.url || '/images/placeholder.png'
    }
  }

  // Сценарий 2: обычный объект { url: ..., desc: ... }
  if (typeof image === 'object' && image !== null && 'url' in image) {
    return (image as any).url
  }

  // Сценарий 3: просто строка URL
  if (typeof image === 'string') {
    return image
  }

  return '/images/placeholder.png'
}