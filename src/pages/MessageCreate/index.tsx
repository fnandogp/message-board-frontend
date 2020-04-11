import React, { useState, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import MessagesCreateForm from './components/MessageCreateForm';
import * as MessagesActions from '../../store/ducks/messages/actions';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

type MessagesCreateProps = {
  loading: boolean;
  errors: string[];
  created: boolean;
  createRequest: Function;
};

const MessagesCreate: React.FunctionComponent<MessagesCreateProps> = ({
  loading,
  errors,
  created,
  createRequest,
}: MessagesCreateProps) => {
  const history = useHistory();
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (created) {
      history.push('/');
    }
  }, [created]);

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createRequest({ content, author });
  };

  return (
    <MessagesCreateForm
      loading={loading}
      errors={errors}
      content={content}
      handleContentChange={handleContentChange}
      author={author}
      handleAuthorChange={handleAuthorChange}
      handleSubmit={handleSubmit}
    ></MessagesCreateForm>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return state.messages;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MessagesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesCreate);
