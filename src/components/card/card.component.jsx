import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {ReactComponent as Logo} from "../../assets/tiffin.svg"
import "./card.styles.scss"
const Example = ({pricing,thali,content}) => {
  return (
    <div className='container'>
      <Card className="background">
        <div className='logo-container'>
            <Logo />
        </div> 
      
        <CardBody>
          <CardTitle className='text'>{pricing}</CardTitle>
          <CardSubtitle className='text'>{thali}</CardSubtitle>
          <CardText className='text'>{content}</CardText>
         
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;