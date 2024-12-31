import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";


export const fetchGalleryImages = async () => {
  try {
    
    const storage = getStorage();
    
    
    const galleryRef = ref(storage, "gallery");

    
    const result = await listAll(galleryRef);

    
    const imageUrls = await Promise.all(
      result.items.map((itemRef) => getDownloadURL(itemRef))
    );

    return imageUrls; 
  } catch (error) {
    console.error("Error fetching images from Firebase Storage:", error);
    return [];
  }
};