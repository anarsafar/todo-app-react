import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TodoItem(props) {
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    ...draggableStyle,
  });

  // const getListStyle = (isDraggingOver) => ({
  //   width: "200",
  // });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const todoList = reorder(
      props.todos,
      result.source.index,
      result.destination.index
    );
    props.setTodos(todoList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            // style={getListStyle(snapshot.isDraggingOver)}
            className={props.darkMode ? "todo-items dark-items" : "todo-items"}
          >
            {props.todos.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                    key={item.id}
                    className={
                      props.darkMode
                        ? "todo-item flex dark-bg dark-item"
                        : "todo-item flex"
                    }
                  >
                    <div className="flex left">
                      <img
                        src={check}
                        alt=""
                        onClick={() => props.checkTodo(item.id)}
                        className={
                          item.completed ? "check-visible check" : "check"
                        }
                      />
                      <button
                        onClick={() => props.checkTodo(item.id)}
                        className={
                          props.darkMode && item.completed
                            ? "dark-bg dark-bg-circle check-btn"
                            : item.completed
                            ? "check-btn"
                            : props.darkMode
                            ? "dark-bg dark-bg-circle"
                            : null
                        }
                      ></button>
                      <p
                        className={
                          item.completed && props.darkMode
                            ? "dark-line"
                            : item.completed
                            ? "line"
                            : null
                        }
                      >
                        {item.text}
                      </p>
                    </div>
                    <div className="cross hide">
                      <img
                        src={cross}
                        alt=""
                        onClick={() => props.removeTodo(item.id)}
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoItem;
