import { gql } from "@apollo/client";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { useAdd_TodoMutation } from "src/codegen/generates";
import { useUserContext } from "src/hook/useUserContext";

export const Add_Mutaion: FC = () => {
  const { user } = useUserContext();
  const [text, setText] = useState("");
  const [addTodo, { loading, error }] = useAdd_TodoMutation({
    update(cache, { data: addTodo }) {
      cache.modify({
        fields: {
          todo(existingTodos = []) {
            const newTODORef = cache.writeFragment({
              id: "TODO:2",
              data: addTodo,
              fragment: gql`
                fragment NewTODO on todo_mutation_response {
                  affected_rows
                }
              `,
            });

            return [...existingTodos, newTODORef];
          },
        },
      });
    },
  });

  if (error) return <p>データがありません</p>;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (user?.id && text.length >= 1) {
      addTodo({ variables: { title: text, id: user.id } });
    } else {
      console.log("ユーザーADがありません");
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className="space-x-3 flex justify-center" onSubmit={handleSubmit}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <input
              type="text"
              className="border border-black"
              onChange={handleChange}
            />
            <button type="submit">ADD TODO</button>
          </>
        )}
      </form>
    </div>
  );
};
