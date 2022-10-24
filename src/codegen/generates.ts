/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
  /** update multiples rows of table: "todo" */
  update_todo_many?: Maybe<Array<Maybe<Todo_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _inc?: InputMaybe<Todo_Inc_Input>;
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _inc?: InputMaybe<Todo_Inc_Input>;
  _set?: InputMaybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Todo_ManyArgs = {
  updates: Array<Todo_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};

export type Query_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

export type Query_RootTodo_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};

export type Subscription_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars["Int"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: "todo";
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  title: Scalars["String"];
  user_id?: Maybe<Scalars["uuid"]>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: InputMaybe<Array<Todo_Bool_Exp>>;
  _not?: InputMaybe<Todo_Bool_Exp>;
  _or?: InputMaybe<Array<Todo_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint on columns "id" */
  TodoPkey = "todo_pkey",
}

/** input type for incrementing numeric columns in table "todo" */
export type Todo_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: "todo_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Todo>;
};

/** on_conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns?: Array<Todo_Update_Column>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** Ordering options when selecting data from "todo". */
export type Todo_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todo */
export type Todo_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
  /** column name */
  UserId = "user_id",
}

export type Todo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Todo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type TodoQueryVariables = Exact<{ [key: string]: never }>;

export type TodoQuery = {
  __typename?: "query_root";
  todo: Array<{ __typename?: "todo"; id: number; title: string }>;
};

export type Add_TodoMutationVariables = Exact<{
  title: Scalars["String"];
  id: Scalars["uuid"];
}>;

export type Add_TodoMutation = {
  __typename?: "mutation_root";
  insert_todo?: {
    __typename?: "todo_mutation_response";
    affected_rows: number;
  } | null;
};

export type UpDate_TodoMutationVariables = Exact<{
  title: Scalars["String"];
  id: Scalars["Int"];
}>;

export type UpDate_TodoMutation = {
  __typename?: "mutation_root";
  update_todo_by_pk?: { __typename?: "todo"; id: number; title: string } | null;
};

export type Delete_TodoMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type Delete_TodoMutation = {
  __typename?: "mutation_root";
  delete_todo_by_pk?: { __typename?: "todo"; id: number } | null;
};

export type Subscription_TodoSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type Subscription_TodoSubscription = {
  __typename?: "subscription_root";
  todo: Array<{ __typename?: "todo"; id: number; title: string }>;
};

export const TodoDocument = gql`
  query TODO {
    todo {
      id
      title
    }
  }
`;

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodoQuery(
  baseOptions?: Apollo.QueryHookOptions<TodoQuery, TodoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
}
export function useTodoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodoQuery, TodoQueryVariables>(
    TodoDocument,
    options
  );
}
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoQueryResult = Apollo.QueryResult<TodoQuery, TodoQueryVariables>;
export const Add_TodoDocument = gql`
  mutation ADD_TODO($title: String!, $id: uuid!) {
    insert_todo(objects: { title: $title, user_id: $id }) {
      affected_rows
    }
  }
`;
export type Add_TodoMutationFn = Apollo.MutationFunction<
  Add_TodoMutation,
  Add_TodoMutationVariables
>;

/**
 * __useAdd_TodoMutation__
 *
 * To run a mutation, you first call `useAdd_TodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdd_TodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAdd_TodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdd_TodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Add_TodoMutation,
    Add_TodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Add_TodoMutation, Add_TodoMutationVariables>(
    Add_TodoDocument,
    options
  );
}
export type Add_TodoMutationHookResult = ReturnType<typeof useAdd_TodoMutation>;
export type Add_TodoMutationResult = Apollo.MutationResult<Add_TodoMutation>;
export type Add_TodoMutationOptions = Apollo.BaseMutationOptions<
  Add_TodoMutation,
  Add_TodoMutationVariables
>;
export const UpDate_TodoDocument = gql`
  mutation UpDate_TODO($title: String!, $id: Int!) {
    update_todo_by_pk(_set: { title: $title }, pk_columns: { id: $id }) {
      id
      title
    }
  }
`;
export type UpDate_TodoMutationFn = Apollo.MutationFunction<
  UpDate_TodoMutation,
  UpDate_TodoMutationVariables
>;

/**
 * __useUpDate_TodoMutation__
 *
 * To run a mutation, you first call `useUpDate_TodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpDate_TodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upDateTodoMutation, { data, loading, error }] = useUpDate_TodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpDate_TodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpDate_TodoMutation,
    UpDate_TodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpDate_TodoMutation, UpDate_TodoMutationVariables>(
    UpDate_TodoDocument,
    options
  );
}
export type UpDate_TodoMutationHookResult = ReturnType<
  typeof useUpDate_TodoMutation
>;
export type UpDate_TodoMutationResult =
  Apollo.MutationResult<UpDate_TodoMutation>;
export type UpDate_TodoMutationOptions = Apollo.BaseMutationOptions<
  UpDate_TodoMutation,
  UpDate_TodoMutationVariables
>;
export const Delete_TodoDocument = gql`
  mutation DELETE_TODO($id: Int!) {
    delete_todo_by_pk(id: $id) {
      id
    }
  }
`;
export type Delete_TodoMutationFn = Apollo.MutationFunction<
  Delete_TodoMutation,
  Delete_TodoMutationVariables
>;

/**
 * __useDelete_TodoMutation__
 *
 * To run a mutation, you first call `useDelete_TodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_TodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDelete_TodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDelete_TodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Delete_TodoMutation,
    Delete_TodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Delete_TodoMutation, Delete_TodoMutationVariables>(
    Delete_TodoDocument,
    options
  );
}
export type Delete_TodoMutationHookResult = ReturnType<
  typeof useDelete_TodoMutation
>;
export type Delete_TodoMutationResult =
  Apollo.MutationResult<Delete_TodoMutation>;
export type Delete_TodoMutationOptions = Apollo.BaseMutationOptions<
  Delete_TodoMutation,
  Delete_TodoMutationVariables
>;
export const Subscription_TodoDocument = gql`
  subscription Subscription_TODO {
    todo {
      id
      title
    }
  }
`;

/**
 * __useSubscription_TodoSubscription__
 *
 * To run a query within a React component, call `useSubscription_TodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscription_TodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscription_TodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscription_TodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Subscription_TodoSubscription,
    Subscription_TodoSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Subscription_TodoSubscription,
    Subscription_TodoSubscriptionVariables
  >(Subscription_TodoDocument, options);
}

export type Subscription_TodoSubscriptionHookResult = ReturnType<
  typeof useSubscription_TodoSubscription
>;
export type Subscription_TodoSubscriptionResult =
  Apollo.SubscriptionResult<Subscription_TodoSubscription>;
