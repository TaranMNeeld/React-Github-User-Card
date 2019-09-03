import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = props => {
    return (
        <Card>
        <Image src={props.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.username}</Card.Meta>
          <Card.Description>{props.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={props.profile}>
            <Icon name='linkify' />
            Profile
          </a>
        </Card.Content>
      </Card>
    );
};

export default UserCard;