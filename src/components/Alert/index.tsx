import React from 'react';
import { List, ListItem } from './styles';

type AlertProps = {
  errors: string[];
};

const Alert: React.FunctionComponent<AlertProps> = ({ errors }: AlertProps) => {
  return (
    <>
      {errors.length > 0 && (
        <List>
          {errors.map((error: string) => (
            <ListItem key="error">{error}</ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default Alert;
