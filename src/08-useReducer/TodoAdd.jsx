import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    onNewTodo(newTodo)
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Aprender ..."
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1"
          
        >
          Agregar
        </button>
      </form>
    </>
  );
};
