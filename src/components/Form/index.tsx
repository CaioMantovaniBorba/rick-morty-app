import { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useContextData } from '../../contexts';

import { Container } from './styles';

interface IEpisode {
  handleSubmit(newValue: boolean): void;
}

function handleRandomId(total: number, quantity: number) {
  const randomIds: number[] = [];
  let randomId = Math.floor(Math.random() * total);

  if (randomId === 0) {
    randomId += 1;
  } else {
    for (randomId; randomIds.length !== quantity; randomId += 1) {
      randomIds.push(randomId);
    }
  }

  return randomIds;
}

function Form({ handleSubmit }: IEpisode) {
  const {
    totalCharacters,
    totalLocations,
    charactersRef,
    locationsRef,
    setRandomCharacters,
    setRandomLocations,
  } = useContextData();

  async function handleData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!charactersRef.current || !locationsRef.current) {
      return;
    }

    const charactersQtd = charactersRef.current.value;

    const charactersIds = handleRandomId(
      totalCharacters,
      Number(charactersQtd),
    );

    setRandomCharacters(charactersIds);

    const locationsQtd = locationsRef.current.value;

    const randomLocations = handleRandomId(
      totalLocations,
      Number(locationsQtd),
    );

    setRandomLocations(randomLocations);

    handleSubmit(true);

    toast.success('Episódio gerado com sucesso');
  }

  return (
    <Container>
      <form onSubmit={handleData}>
        <h1>
          Selecione a quantidade de personagens e locais para gerar o episódio
        </h1>

        <label htmlFor="characters">Número de personagens</label>
        <input
          id="characters"
          type="number"
          defaultValue="1"
          ref={charactersRef}
          min="1"
          max="10"
        />

        <label htmlFor="locations">Número de locais</label>
        <input
          id="locations"
          type="number"
          defaultValue="1"
          ref={locationsRef}
          min="1"
          max="10"
        />

        <button type="submit">Criar</button>
      </form>

      <Toaster />
    </Container>
  );
}

export default Form;
