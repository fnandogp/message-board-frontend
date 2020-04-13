import React from 'react';
import { ValidationError } from '../../../../servives/api';
import {
  Form,
  InputText,
  InputTextarea,
  InputLabel,
  InputFeedback,
  SubmitButton,
} from './styles';

type MessageCreateFormProps = {
  loading: boolean;
  content: string;
  handleContentChange: React.ChangeEventHandler;
  author: string;
  handleAuthorChange: React.ChangeEventHandler;
  handleSubmit: React.FormEventHandler;
  errors: ValidationError[];
};

const MessageCreateForm: React.FunctionComponent<MessageCreateFormProps> = ({
  loading,
  content,
  handleContentChange,
  author,
  handleAuthorChange,
  handleSubmit,
  errors,
}: MessageCreateFormProps) => {
  const contentError = errors.find((error) => error.property === 'content');
  const authorError = errors.find((error) => error.property === 'author');

  return (
    <Form action="POST" onSubmit={handleSubmit}>
      <InputLabel htmlFor="content">Content</InputLabel>
      <InputTextarea
        name="content"
        value={content}
        onChange={handleContentChange}
        rows={5}
        error={!!contentError}
      />
      {contentError && (
        <InputFeedback>
          {Object.values(contentError.constraints).join('\n')}
        </InputFeedback>
      )}
      <InputLabel htmlFor="author">Author</InputLabel>
      <InputText
        type="text"
        name="author"
        value={author}
        onChange={handleAuthorChange}
        error={!!authorError}
      />
      {authorError && (
        <InputFeedback>
          {Object.values(authorError.constraints).join('\n')}
        </InputFeedback>
      )}
      <SubmitButton type="submit" disabled={loading}>
        Create
      </SubmitButton>
    </Form>
  );
};

export default MessageCreateForm;
