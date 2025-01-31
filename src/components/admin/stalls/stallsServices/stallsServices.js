

import { deleteStall, updateStall } from "../../../../api/stalls";
export const handleCloseEditDialog = (setEditOpenDialog, setEditStall) => {
    setEditOpenDialog(false);
    setEditStall(null); 
  };



export const handleUpdateStalls = async ({
  stallId,
  updatedData,
  stalls,
  setStalls,
  setFilteredStalls,
  fetchStalls,
  setEditStall,
}) => {
  try {
    const updatedStall = await updateStall(stallId, updatedData);
    console.log(updateStall)
    const updatedStalls = stalls.map((stall) =>
      stall.id === stallId ? { ...stall, ...updatedStall } : stall
    );

    setStalls(updatedStalls);
    setFilteredStalls(updatedStalls); 

    console.log("Updated Stalls:", updatedStalls);
    setEditStall(null);

    fetchStalls();
  } catch (error) {
    console.error("Error updating the stall:", error);
  }
};


export const handleDeleteStalls =async({

  stallId,
  stalls,
  setStalls,
  setFilteredStalls,
  fetchStalls,
}) =>{

  try{
    await deleteStall(stallId);

    const updatedStalls = stalls.filter((stall) => stall.id !== stallId)
    setStalls(updatedStalls);
    setFilteredStalls(updatedStalls);
    fetchStalls();
    alert("stall deleted successfully")
  }catch(error){
    console.log("Error , deleting the stall : " , error.message);
  }
}


export const handleInputChange = (e, setState) => {
  const { name, value } = e.target;
  setState((prev) => ({ ...prev, [name]: value }));
};

export const handleContactChange = (e, setState) => {
  const { name, value } = e.target;
  setState((prev) => ({
      ...prev,
      contact: {
          ...prev.contact,
          [name]: value,
      },
  }));
};


export const updateOffers = (index, value, setState) => {
  setState((prev) => {
    const updatedOffers = [...prev.offers];
    updatedOffers[index] = value;          
    return { ...prev, offers: updatedOffers }; 
  });
};



export const processImageChange = (event, field, setStateFunctions) => {
  const { setImage, setImageLeft, setImageRight, setFormData } = setStateFunctions;
  
  const file = event.target.files[0];

  if (!file) return; 

  if (!file.type.startsWith("image/")) {
    alert("Please select a valid image file.");
    return;
  }

  const previewUrl = URL.createObjectURL(file);
  if (field === "image") setImage(file);
  if (field === "imageLeft") setImageLeft(file);
  if (field === "imageRight") setImageRight(file);

  const reader = new FileReader();
  reader.onload = () => {
    setFormData((prev) => ({
      ...prev,
      [field]: reader.result,
    }));
  };
  reader.readAsDataURL(file);
};





export const handleSearch = (stalls, searchText) => {
  const lowerCaseSearchText = searchText.toLowerCase();
  return stalls.filter((stall) =>
    stall.name.toLowerCase().includes(lowerCaseSearchText) ||
    stall.belongTo.toLowerCase().includes(lowerCaseSearchText)
  );
};