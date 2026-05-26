


export const getImageUrl = (filePath: string | null, size: string = 'w500'): string => {
  if (!filePath) {
    return '/placeholder-image.jpg';
  }
  return `${import.meta.env.VITE_IMAGE_URL}/${size}${filePath}`;
};