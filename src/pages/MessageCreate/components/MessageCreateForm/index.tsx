import React from 'react';
import { Form, Label, InputTextarea, InputText, SubmitButton } from './styles';
import Alert from '../../../../components/Alert';

type MessageCreateFormProps = {
  loading: boolean;
  errors: string[];
  content: string;
  handleContentChange: React.ChangeEventHandler;
  author: string;
  handleAuthorChange: React.ChangeEventHandler;
  handleSubmit: React.FormEventHandler;
};

const MessageCreateForm: React.FunctionComponent<MessageCreateFormProps> = ({
  loading,
  errors,
  content,
  handleContentChange,
  author,
  handleAuthorChange,
  handleSubmit,
}: MessageCreateFormProps) => {
  return (
    <Form action="POST" onSubmit={handleSubmit}>
      <Alert errors={errors}></Alert>
      <Label htmlFor="content">Content</Label>
      <InputTextarea
        name="content"
        value={content}
        onChange={handleContentChange}
        rows={5}
      />
      <Label htmlFor="author">Author</Label>
      <InputText
        type="text"
        name="author"
        value={author}
        onChange={handleAuthorChange}
      />
      <SubmitButton type="submit" disabled={loading}>
        Create
      </SubmitButton>
    </Form>
  );
};

export default MessageCreateForm;
