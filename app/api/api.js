// import {API} from "./constant";
// import {createApi} from "@reduxjs/toolkit/query/react";
// import {baseQuery} from "./fetchQuery";

// export const bookApi = createApi({
// 	reducerPath: "book",
// 	baseQuery,
// 	endpoints: (builder) => ({
// 		getBooks: builder.query({
// 			query: () => ({
// 				url: API.BOOKS,
// 				method: "GET",
// 			}),
// 		}),
// 		getBooksById: builder.query({
// 			query: ({id}) => ({
// 				url: `${API.BOOKS_BY_ID}/${id}`,
// 				method: "GET",
// 			}),
// 		}),
// 	}),
// });

// export const {useGetBooksQuery, useGetBooksByIdQuery} = bookApi;
