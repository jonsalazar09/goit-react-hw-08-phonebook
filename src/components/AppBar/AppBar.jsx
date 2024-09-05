import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { Header, Container } from 'components/AppBar/AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Container>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};

export default AppBar;
