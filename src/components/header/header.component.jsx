import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./header.styles"

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        Shop
      </OptionLink>
      <OptionLink to="/contact">
        Contact
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          Sign out
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          Sign in
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
