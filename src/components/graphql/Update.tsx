import { Reference } from "@apollo/client";
import { FC, useState } from "react";
import {
  useDelete_TodoMutation,
  useUpDate_TodoMutation,
} from "src/codegen/generates";

type Props = {
  title: string;
  id: number;
};

export const Update: FC<Props> = ({ title, id }) => {
  const [addTodo] = useUpDate_TodoMutation();
  const [update, setUpdate] = useState(false);
  const [text, setText] = useState("");
  const [Delete_TODO] = useDelete_TodoMutation({
    update(cache) {
      cache.modify({
        fields: {
          todo(existingTodosRef, { readField }) {
            return existingTodosRef.filter(
              (todoRef: Reference) => id !== readField("id", todoRef)
            );
          },
        },
      });
    },
  });

  const handleClick = () => {
    if (text.length >= 1) {
      try {
        addTodo({ variables: { title: text, id: id } });
        setUpdate(false);
      } catch (error) {
        console.log("error");
      }
    }
    setUpdate(false);
  };

  const hadleDelete = () => {
    Delete_TODO({ variables: { id: id } });
  };
  return (
    <div>
      <div>
        {update === true ? (
          <div className="flex space-x-2">
            <input
              type="text"
              className="border border-black "
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleClick}>完了</button>
          </div>
        ) : (
          <div className="flex space-x-8">
            <p>{title}</p>
            <h1 onClick={() => setUpdate(true)} className="text-red-500">
              更新
            </h1>
            <p className="text-blue-600" onClick={hadleDelete}>
              削除
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
