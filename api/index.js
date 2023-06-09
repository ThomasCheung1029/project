import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const { data: { data } } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude:bl_lat? bl_lat: "11.847676",
                    tr_latitude:tr_lat? tr_lat: "12.838442",
                    bl_longitude:bl_lng? bl_lng: "109.095887",
                    tr_longitude:tr_lng? tr_lng: "109.149359",
                    restaurant_tagcategory_standalone: "10591",
                    restaurant_tagcategory: "10591",
                    limit: "30",
                    currency: "USD",
                    open_now: "false",
                    lunit: "km",
                    lang: "en_US",
                },
                headers: {
                    "X-RapidAPI-Key": "9d151c1f46msh656b1a7c39e24adp1d6902jsnac0d1a34fddf",
                    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                },
            }
        );
        return data;
    } catch (error) {
        return null;
    }
};