import { Genre, TodoItem } from "../../types/type";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Text, Input, PrimaryButton, SecondaryButton } from "index";
import { headers } from "next/dist/client/components/headers";

type AddTodoModal = {
  title: string;
  description: string;
  dueDate: string;
};

type Props = {
  genre: Genre;
  todos: TodoItem[];
  setTodo: Function;
  setShowAddTodoModal: Function;
};

const AddTodoModal: React.FC<Props> = ({
  genre,
  todos,
  setTodo,
  setShowAddTodoModal,
}) => {
  const url = "http://127.0.0.1:8000/todo";
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isDirty, isValid },
  } = useForm<AddTodoModal>();

  const addTodo = (genre: Genre) => {
    const title = getValues("title");
    const description = getValues("description");
    const dueDate = getValues("dueDate");
    console.log(title);
    console.log(description);
    console.log(dueDate);

    const newTodos: TodoItem = {
      //   id: crypto.randomUUID(),
      title: title,
      description: description,
      dueDate: dueDate,
      genre: "Work",
      progress: 0,
      createBy: "aiueo",
      isShowDetails: false,
      memos: [],
    };

    // axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Headers"] =
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
    // axios.defaults.headers.post["allow"] = "*";

    axios
      .post("http://127.0.0.1:8000/todo", newTodos, { withCredentials: true })
      .then((res) => {
        console.log(res);
      });

    // axios.get(url).then((res) => {
    //   console.log(res);
    // });
    // const axiosInstance = axios.create({
    //   headers: { "Access-Control-Allow-Origin": "*" },
    // });
    // axiosInstance.get("/").then((res) => {
    //   console.log(res, "hello");
    // });
    // axiosInstance.post("/todo", newTodos).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <SModal>
      <SModalContainer>
        <SModalInner>
          <SModalHeader>
            <Text fontSize={28}>Todoを追加</Text>
          </SModalHeader>

          <SForm onSubmit={handleSubmit(() => addTodo(genre))} method="post">
            <SFormItem>
              <SFormLabel htmlFor="todoTitle">タイトル</SFormLabel>
              <Input
                {...register("title", {
                  required: "タイトルを入力してください",
                })}
                type="text"
                name="title"
                id="todoTitle"
                width={300}
              />
            </SFormItem>
            <SFormItem>
              <SFormLabel htmlFor="todoGenre">ジャンル</SFormLabel>
              <Input
                type="text"
                name="genre"
                id="todoGenre"
                readOnly
                content={genre}
                width={300}
              />
            </SFormItem>
            <SFormItem>
              <SFormLabel htmlFor="todoDescription">内容</SFormLabel>
              <Input
                {...register("description", {
                  required: "詳細を入力してください",
                })}
                type="text"
                name="description"
                id="todoDescription"
                width={300}
              />
            </SFormItem>
            <SFormItem>
              <SFormLabel htmlFor="todoDueDate">達成期限</SFormLabel>
              <Input
                {...register("dueDate", {
                  required: "達成期限を入力してください",
                })}
                type="date"
                name="dueDate"
                id="todoDueDate"
                width={300}
              />
            </SFormItem>
            <SBottomButtons>
              <SecondaryButton
                type="button"
                onClick={() => setShowAddTodoModal(false)}
              >
                閉じる
              </SecondaryButton>
              <PrimaryButton disabled={!isDirty || !isValid}>
                追加
              </PrimaryButton>
            </SBottomButtons>
          </SForm>
        </SModalInner>
      </SModalContainer>
    </SModal>
  );
};

export default AddTodoModal;

const SModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const SModalContainer = styled.div`
  width: 80%;
  height: 80%;
  margin: 24px auto;
  border-radius: 8px;
  border: 1px solid #000;
  background-color: #fff;
`;

const SModalInner = styled.div`
  width: 80%;
  height: 80%;
  margin: 48px auto 0;
  position: relative;
`;
const SModalHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const SForm = styled.form`
  // position: relative;
`;

const SFormItem = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const SFormLabel = styled.label`
  font-size: 20px;
`;

const SBottomButtons = styled.div`
  width: 80%;
  margin: 48px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
