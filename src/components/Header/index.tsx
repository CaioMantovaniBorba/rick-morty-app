import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface IHeader {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
const Header: React.FC<IHeader> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={50}
        handleDiameter={30}
        className="toggle"
      />
    </Container>
  );
};

export default Header;
