import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {setCurrentUser} from "./reducer.js";

const usersApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.gonnago.am/" }),
    endpoints: (builder) => ({
        fetchUser: builder.query({
            query: ({city_id, category_id}) => {
                return {
                    url: `/event/home-page/`,
                    params: {city_id, category_id}
                }
            },
            // async onQueryStarted(args, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data } = await queryFulfilled;
            //         dispatch(setCurrentUser(data));
            //     } catch (error) {
            //         console.error('Failed to fetch user data:', error);
            //     }
            // },
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: "user",
                method: "POST",
                body: user,
            }),
        }),
    }),
});

export const { useFetchUserQuery, useCreateUserMutation } = usersApi;
export default usersApi