import React from 'react';
import { Container, Avatar } from '@deskpro/react-components';

export default class App extends React.Component {
  render() {
    const { tabData } = this.props;

    return (
      <Container>
        <ul className="participants-list">
          {tabData.participants.map((p) => (
            <li key={p.person.id}>
              <Avatar src={p.person.default_picture_url} />
              <div>
                {p.person.name}
              </div>
              <div>
                {p.person.primary_email.email}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}