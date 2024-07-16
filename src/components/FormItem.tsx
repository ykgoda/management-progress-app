import styled from "styled-components";
import React, { useState } from "react";
import { FormItem } from "../types/type";

const FormItem: React.FC<FormItem<string>> = ({
  content,
  type,
  placeholder,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <SFormItem>
      <SLabel htmlFor="">{content}</SLabel>
      <SInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </SFormItem>
  );
};

const SFormItem = styled.div`
  margin: 20px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const SLabel = styled.label`
  display: inline-block;
  padding: 16px 0;
`;

const SInput = styled.input`
  border-radius: 4px;
  padding: 4px;
  color: black;
`;

export default FormItem;
