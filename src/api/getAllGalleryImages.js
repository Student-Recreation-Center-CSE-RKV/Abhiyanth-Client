import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  

export const fetchAllImages = async (name) => {
  try {
    
    const storage = getStorage();
    
    
    const galleryRef = ref(storage, name);

    
    const result = await listAll(galleryRef);

    
    const imageUrls = await Promise.all(
      result.items.map((itemRef) => getDownloadURL(itemRef))
    );
    if(name==="galleryCarousel")
      return imageUrls;
    else
      return shuffleArray(imageUrls);
  } catch (error) {
    console.error("Error fetching images from Firebase Storage:", error);
    return [];
  }
};