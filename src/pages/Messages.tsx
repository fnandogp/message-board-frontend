import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../store';
import { Message } from '../store/ducks/messages/types';
import MessageList from '../components/MessageList';
import * as MessagesActions from '../store/ducks/messages/actions';

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
  }, [deleted]);

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
  bindActionCreators(MessagesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
