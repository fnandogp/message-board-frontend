import React, { useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/ducks/rootReducer';
import * as actions from '../../store/ducks/messages/actions';

import MessagesCreateForm from './components/MessageCreateForm';

type MessagesCreateProps = {
  loading: boolean;
  created: boolean;
  createRequest: Function;
};

const MessagesCreate: React.FunctionComponent<MessagesCreateProps> = ({
  loading,
  createRequest,
}: MessagesCreateProps) => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

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
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesCreate);
