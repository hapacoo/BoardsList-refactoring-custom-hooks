import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";

const FETCH_BOARDS_COUNT = gql`
   query fetchBoardsCount($search: String) {
      fetchBoardsCount(search: $search)
   }
`;

export const useQueryFetchBoardCount = () => {
   const queryFetchCount = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(
      FETCH_BOARDS_COUNT
   );

   return queryFetchCount;
};
