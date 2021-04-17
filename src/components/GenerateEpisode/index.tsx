/* eslint-disable react/no-unused-prop-types */
import { useQuery } from '@apollo/client';

import { INFO_CHARACTERS, INFO_LOCATIONS } from '../../queries';
import { useContextData } from '../../contexts';
import Loader from '../Loader';

import { List, Character } from './styles';

interface ICharacter {
  id: string;
  name: string;
  image: string;
}

interface ILocation {
  id: string;
  name: string;
}

const GenerateEpisode: React.FC = () => {
  const { randomCharacters, randomLocations } = useContextData();

  const { data: dataC, loading: loadingC, error: errorC } = useQuery(
    INFO_CHARACTERS,
    {
      variables: {
        randomCharacters,
      },
    },
  );

  const { data, loading, error } = useQuery(INFO_LOCATIONS, {
    variables: {
      randomLocations,
    },
  });

  if (loadingC || loading) return <Loader />;

  if (errorC || error) {
    return (
      <>
        <p>Um erro ocorreu...</p>
        <span>{errorC?.message}</span>
        <span>{error?.message}</span>
      </>
    );
  }

  return (
    <>
      <List>
        <h1>Personagens</h1>
        {dataC.charactersByIds.map(({ id, name, image }: ICharacter) => (
          <li key={id}>
            <Character>
              <img src={image} alt="Avatar" />
              <span>{name}</span>
            </Character>
          </li>
        ))}
      </List>

      <List>
        <h1>Locais</h1>
        {data.locationsByIds.map(({ id, name }: ILocation) => (
          <li key={id}>{name}</li>
        ))}
      </List>
    </>
  );
};

export default GenerateEpisode;
