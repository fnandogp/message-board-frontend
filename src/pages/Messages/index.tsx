import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../store/messages/actions';
import { Message } from '../../store/messages/types';
import { ApplicationState } from '../../store/types';
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
