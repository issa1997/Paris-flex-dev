import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React, { ReactNode } from "react";

const CardContainer: React.FC<{
  content: ReactNode | JSX.Element;
  containerStyle: CSSProperties;
}> = (props) => {
  return (
    <>
      <Card style={props.containerStyle}>
        <CardContent>{props.content}</CardContent>
      </Card>
    </>
  );
};

export default CardContainer;
