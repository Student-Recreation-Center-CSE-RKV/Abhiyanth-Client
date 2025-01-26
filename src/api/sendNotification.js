import axios from "axios";
import { getAllData, addDataToCollection } from "./general";

const getAllFCMTokens = async () => {
    try {
        const res = await getAllData("FCM_Tokens");
        return res[0].Token;
    } catch (error) {
        return []
    }

}

const addAnnouncement = async (data) => {
    try {
        const res = await addDataToCollection("notifications", data);
        return true;
    }
    catch (error) {
        return false;
    }
}



const sendNotifications = async (payload) => {
    try {
        if (await addAnnouncement(payload)) {
            const api = "https://us-central1-abhiyanth-a8d4c.cloudfunctions.net/sendNotification";
            const tokens = await getAllFCMTokens();
            const payload = {
                payload: {
                    tokens: tokens,
                    data: {
                        title: payload.title,
                        body: payload.sub_title,
                        bigPicture: payload.image
                    }
                }
            }
            const { data } = await axios.post(api, payload);
            console.log(data);
            return 200;
        }
        else {
            return false;
        }

    } catch (error) {
        console.error(error);
        return false;
    }
};

export { sendNotifications, getAllFCMTokens };