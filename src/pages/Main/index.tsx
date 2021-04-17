import { useState } from 'react';

import Provider from '../../contexts';
import Form from '../../components/Form';
import GenerateEpisode from '../../components/GenerateEpisode';

import { Container, Left, Right, List } from './styles';

const Main: React.FC = () => {
  const [handleSubmit, setHandleSubmit] = useState(false);

  return (
    <Provider>
      <Container>
        <Left>
          <Form handleSubmit={setHandleSubmit} />
        </Left>

        <Right>
          {handleSubmit && (
            <List>
              <h1>Episódio gerado</h1>
              <GenerateEpisode />
            </List>
          )}
        </Right>
      </Container>
    </Provider>
  );
};

export default Main;
