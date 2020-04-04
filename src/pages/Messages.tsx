import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../store';
import { Message } from '../store/ducks/messages/types';
import MessageList from '../components/MessageList';
import * as MessagesActions from '../store/ducks/messages/actions';

type MessagesProps = {
  messages: Message[];
  indexRequest: Function;
};

const Messages: React.FunctionComponent<MessagesProps> = ({
  messages,
  indexRequest,
}: MessagesProps) => {
  useEffect(() => {
    indexRequest();
  }, [indexRequest]);

  return <MessageList messages={messages} />;
};

const mapStateToProps = (state: ApplicationState) => {
  return { messages: state.messages.data };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MessagesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
