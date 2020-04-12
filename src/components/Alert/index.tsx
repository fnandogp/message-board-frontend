import React from 'react';
import { Container, List, ListItem } from './styles';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../store/ducks/alert/actions';

type AlertProps = {
  success: string[];
  info: string[];
  warning: string[];
  danger: string[];
};

const Alert: React.FunctionComponent<AlertProps> = ({
  success,
  info,
  warning,
  danger,
}: AlertProps) => {
  return (
    <Container>
      {success.length > 0 && (
        <List>
          {success.map((item: string) => (
            <ListItem key="error">{item}</ListItem>
          ))}
        </List>
      )}
      {info.length > 0 && (
        <List>
          {info.map((item: string) => (
            <ListItem key="error">{item}</ListItem>
          ))}
        </List>
      )}
      {warning.length > 0 && (
        <List>
          {warning.map((item: string) => (
            <ListItem key="error">{item}</ListItem>
          ))}
        </List>
      )}
      {danger.length > 0 && (
        <List>
          {danger.map((item: string) => (
            <ListItem key="error">{item}</ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return state.alert;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
