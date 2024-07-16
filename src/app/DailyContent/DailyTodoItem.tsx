import { TodoItem, Genre } from "../../types/type";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { TodoDescription, AddTodoModal, Text, PrimaryButton } from "index";
import { rootCertificates } from "tls";

type Props = {
  todos: TodoItem[];
  setTodo: Function;
};

const DailyTodoItem: React.FC<Props> = ({ todos, setTodo }) => {
  const [showTodoGenre, setShowTodoGenre] = useState<Genre>("Work");
  const [showAddTodoModal, setShowAddTodoModal] = useState<boolean>(false);

  const showDetails = (todo: TodoItem, index: number) => {
    todo.isShowDetails = !todo.isShowDetails;
    console.log("todo:", todo);
    setTodo(
      todos.map((val, i) => {
        return i === index ? todo : val;
      })
    );
  };

  const showAddTodo = () => {
    setShowAddTodoModal(true);
  };

  return (
    <div>
      <SDailyTodoHeader>
        <Text fontSize={24}>Todo List</Text>
        <PrimaryButton onClick={() => showAddTodo()} widthRatio={10}>
          Todoを追加
        </PrimaryButton>
      </SDailyTodoHeader>
      <div>
        <ul>
          <SDailyTodoItem marginbottom="8px" key={-1}>
            <div>
              <Text>タスク</Text>
            </div>
            <div>
              <Text>分類</Text>
            </div>
            <div>
              <Text>進捗</Text>
            </div>
            <div>
              <Text>期限</Text>
            </div>
            <div>
              <Text></Text>
            </div>
          </SDailyTodoItem>
          {todos.map((todo, index) => {
            return (
              <React.Fragment key={index}>
                <SDailyTodoItem
                  marginbottom="16px"
                  onClick={() => showDetails(todo, index)}
                >
                  <div>
                    <Text className="dailyTodoItemContent">{todo.title}</Text>
                  </div>
                  <div>
                    <Text>{todo.genre}</Text>
                  </div>
                  <div>
                    <Text>{todo.progress}</Text>
                  </div>
                  <div>
                    <Text>{todo.dueDate}</Text>
                  </div>
                  <div>
                    <SExpandMoreIcon
                      className="material-symbols-outlined"
                      isshowdetails={todo.isShowDetails}
                    >
                      expand_more
                    </SExpandMoreIcon>
                  </div>
                </SDailyTodoItem>
                {todo.isShowDetails && (
                  <TodoDescription todo={todo} key={index} setTodo={setTodo} />
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      {showAddTodoModal && (
        <AddTodoModal
          genre={showTodoGenre}
          todos={todos}
          setTodo={setTodo}
          setShowAddTodoModal={setShowAddTodoModal}
        />
      )}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
    </div>
  );
};

export default DailyTodoItem;

const SDailyTodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SDailyTodoItem = styled.li<{ marginbottom?: string }>`
  border: 1px solid #333;
  border-radius: 4px;
  margin-bottom: ${(props) => props.marginbottom && props.marginbottom};
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  & > div:nth-of-type(-n + 4) {
    width: 24%;
    text-align: center;
  }
  & > div:nth-of-type(5) {
    width: 4%;
    text-align: center;
  }
`;

const STodoTitle = styled.span``;

const SExpandMoreIcon = styled.span<{ isshowdetails: boolean }>`
  transform: ${(props) =>
    props.isshowdetails ? "rotate(180deg)" : "rotate(0)" || "rotate(0)"};
`;
