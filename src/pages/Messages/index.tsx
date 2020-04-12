import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../store/ducks/rootReducer';
import { Message } from '../../store/ducks/messages/types';
import * as actions from '../../store/ducks/messages/actions';

import MessageList from './components/MessageList';

type MessagesProps = {
  data: Message[];
  deleted: boolean;
  indexRequest: Function;
  deleteRequest: Function;
};

const Messages: React.FunctionComponent<MessagesProps> = ({
  data: messages,
  deleted,
  indexRequest,
  deleteRequest,
}: MessagesProps) => {
  useEffect(() => {
    indexRequest();
  }, [indexRequest]);

  useEffect(() => {
    if (deleted) {
      indexRequest();
    }
  }, [deleted, indexRequest]);

  const handleDeleteClick = (id: string) => {
    deleteRequest({ id });
  };

  return (
    <MessageList messages={messages} handleDeleteClick={handleDeleteClick} />
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return state.messages;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
