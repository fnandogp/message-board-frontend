import styled from 'styled-components';

type InputProps = {
  error?: boolean;
};

export const Form = styled.form`
  margin-bottom: 0.5rem;
`;

export const InputLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 0.5rem;
`;

export const InputTextarea = styled.textarea<InputProps>`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${(props) => (props.error ? 'red' : 'black')};
  resize: none;
`;

export const InputText = styled.input<InputProps>`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${(props) => (props.error ? 'red' : 'black')};
`;

export const InputFeedback = styled.small`
  display: block;
  font-size: 0.75rem;
  color: red;
  margin-bottom: 1rem;
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
