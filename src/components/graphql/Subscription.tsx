import { FC } from "react";
import { useSubscription_TodoSubscription } from "src/codegen/generates";

import { Add_Mutaion } from "./Add_Mutaion";
import { Update } from "./Update";

export const Subscription: FC = () => {
  const { loading, error, data } = useSubscription_TodoSubscription();

  if (error) {
    console.log(error);
  }
  if (loading) {
    return null;
  }
  return (
    <div>
      {data?.todo ? (
        <>
          {data.todo.map((todos) => (
            <div key={todos.id} className=" font-bold  mt-5 ml-5 ">
              <Update title={todos.title} id={todos.id} />
            </div>
          ))}
        </>
      ) : null}

      <div className="flex justify-center ">
        <Add_Mutaion />
      </div>
    </div>
  );
};
