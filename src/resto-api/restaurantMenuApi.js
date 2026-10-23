import { MENU_API } from "../utils/constant";

export async function restaurantMenuApi(resId) {
    const restaurantMenu = await fetch(MENU_API + resId);

    console.log(restaurantMenu)

    if (!restaurantMenu.ok || restaurantMenu.status === 202) {
        throw new Error("failed to fetch data");
    }
    const data = await restaurantMenu.json();

    return data;
}