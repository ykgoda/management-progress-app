import React, { useState } from "react";
import { TodoItem } from "../../types/type";
import styled from "styled-components";
import { Text, Border, PrimaryButton } from "index";

type Props = {
  todo: TodoItem;
  setTodo: Function;
};

const TodoDescription: React.FC<Props> = ({ todo, setTodo }) => {
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };
  return (
    <STodoDescription>
      <STodoDescriptionTxt>
        <Text>詳細: {todo.description}</Text>
      </STodoDescriptionTxt>
      <p>
        <Text>コメント</Text>
      </p>
      <Border />
      <p>
        <Text>{!todo.memos?.length && "コメントがありません"}</Text>
      </p>
      {todo.memos &&
        todo.memos.map((memo, index) => {
          return (
            <div key={index}>
              <div>
                {memo.content}
                {memo.isEdited && "編集済み"}
              </div>
              <button>編集</button>
              <button>削除</button>
            </div>
          );
        })}
      <div>
        <SCommentTextArea
          name=""
          id=""
          cols={50}
          rows={5}
          onChange={handleChange}
          value={textAreaValue}
        ></SCommentTextArea>
      </div>
      <PrimaryButton widthRatio={10}>追加</PrimaryButton>
    </STodoDescription>
  );
};

export default TodoDescription;

const STodoDescription = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
`;

const STodoDescriptionTxt = styled.p`
  margin-bottom: 16px;
`;

const SCommentTextArea = styled.textarea`
  border: 1px solid #000;
  border-radius: 4px;
  resize: none;
`;
