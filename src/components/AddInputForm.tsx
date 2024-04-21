import React, {useState} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../styles/FlexWrapper";

type AddInputFormType = {
    title: string
    onChange: (value: string) => void
}
export const AddInputForm = ({onChange,title}: AddInputFormType) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState<"Not Empty!"| null>(null)

    const onClickHandler = () => {
        if(value.trim()){
            onChange(value)
            setValue('')
        }else setError("Not Empty!")
    }
    const onChangePressKey = (e:  React.KeyboardEvent<HTMLTextAreaElement>) => {
        setError(null)
        e.code === "Enter" && onClickHandler()

    }

    return (
        <AddInputFormStyles>
            <FlexWrapper align="center">
                <TextareaStyle
                    error={error}
                    value={value}
                    className="border"
                    onChange={e => setValue(e.currentTarget.value)}
                    onKeyDown={e => onChangePressKey(e)}
                />
                <button onClick={onClickHandler} >{title}</button>
            </FlexWrapper>
            <ErrorStyle>{error}</ErrorStyle>
        </AddInputFormStyles>
    );
};

const AddInputFormStyles = styled.div``

const ErrorStyle = styled.span`
    color: #d70a0a;
`

const TextareaStyle = styled.textarea<{error? : "Not Empty!"| null}>`
    border: ${props => props.error ? "2px solid #d70a0a" : ""};
    outline: none;
    resize: none;
    min-height: 50px;
    min-width: 300px;
    text-align: left;
`