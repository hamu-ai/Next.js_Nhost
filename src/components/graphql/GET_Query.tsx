import { FC } from "react";
import { useTodoQuery } from "src/codegen/generates";

import { Update } from "./Update";

const GET_Query: FC = () => {
  const { loading, error, data } = useTodoQuery();

  if (error) {
    console.log(error);
  }
  if (loading) {
    return null;
  }
  return (
    <div className="ml-9 mt-6 ">
      <h1 className="text-2xl mb-4">記事</h1>

      {data ? (
        <>
          {data.todo.map((user) => {
            return (
              <div key={user.id} className="my-2  font-bold text-lg">
                <Update title={user.title} id={user.id} />
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default GET_Query;
