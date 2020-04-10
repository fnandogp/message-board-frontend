import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin: 0.5rem;
  font-size: 0.5rem;
`;

export const InputTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  resize: none;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid black;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: white;
  padding: 0.5rem;
  border: 3px solid black;
  margin-top: 1rem;
  &:hover {
    background: #f0f0f0;
  }

  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;
