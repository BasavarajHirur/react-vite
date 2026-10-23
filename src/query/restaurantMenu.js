import { useQuery } from '@tanstack/react-query';
import { restaurantMenuApi } from '../resto-api/restaurantMenuApi';
import { defaultValues } from '../utils/defaultMenu';

export const restaurantMenuQuery = (restId) => {
    const query = useQuery({
        queryKey: ['restaurantMenu', restId],
        queryFn: () => restaurantMenuApi(restId),
        enabled: Boolean(restId),
        staleTime: 5 * 60 * 1000, //for refetch after 5 mnts instead of cache
        retry: false, // if api failed you can add true to make retry,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });

    return {
        ...query,
        menu: query.data ?? defaultValues
    }
}