import styled from "styled-components";

const StyledNav = styled.nav`
  background: red;
  flex-grow: 1;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    li {
      font-size: 2rem;
      margin: 1rem 0;
    }
  }
`;

const Nav: React.FC = () => (
  <StyledNav>
    <ul>
      <li>Home</li>
      <li>Explore</li>
      <li>Notifications</li>
      <li>Messages</li>
      <li>Bookmarks</li>
      <li>Lists</li>
      <li>Profile</li>
      <li>More</li>
    </ul>
    <a href="#">Tweet</a>
  </StyledNav>
);

export default Nav;
