import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

// Local Components
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import LogoSlot from './plugin-slots/LogoSlot';
import DesktopLoggedOutItemsSlot, { desktopLoggedOutItemsDataShape } from './plugin-slots/DesktopLoggedOutItemsSlot';
import DesktopMainMenuSlot, { desktopHeaderMainOrSecondaryMenuDataShape } from './plugin-slots/DesktopMainMenuSlot';
import DesktopSecondaryMenuSlot from './plugin-slots/DesktopSecondaryMenuSlot';
import DesktopUserMenuSlot, { desktopUserMenuDataShape } from './plugin-slots/DesktopUserMenuSlot'

// i18n
import messages from './Header.messages';

// Assets
import { CaretIcon } from './Icons';

const DesktopHeaderMainOrSecondaryMenu = ({menu}) => {
  // Nodes are accepted as a prop
  if (!Array.isArray(menu)) {
    return menu;
  }

  return menu.map((menuItem) => {
    const {
      type,
      href,
      content,
      submenuContent,
      disabled,
      isActive,
      onClick,
    } = menuItem;

    if (type === 'item') {
      return (
        <a
          key={`${type}-${content}`}
          className={`nav-link${disabled ? ' disabled' : ''}${isActive ? ' active' : ''}`}
          href={href}
          onClick={onClick || null}
        >
          {content}
        </a>
      );
    }

    return (
      <Menu key={`${type}-${content}`} tag="div" className="nav-item" respondToPointerEvents>
        <MenuTrigger onClick={onClick || null} tag="a" className="nav-link d-inline-flex align-items-center" href={href}>
          {content} <CaretIcon role="img" aria-hidden focusable="false" />
        </MenuTrigger>
        <MenuContent className="pin-left pin-right shadow py-2">
          {submenuContent}
        </MenuContent>
      </Menu>
    );
  });
}

DesktopHeaderMainOrSecondaryMenu.propTypes = {
  menu: desktopHeaderMainOrSecondaryMenuDataShape,
}

const DesktopLoggedOutItems = ({items}) => {
  return items.map((item, i, arr) => (
    <a
      key={`${item.type}-${item.content}`}
      className={i < arr.length - 1 ? 'btn mr-2 btn-link' : 'btn mr-2 btn-outline-primary'}
      href={item.href}
    >
      {item.content}
    </a>
  ));
}

DesktopLoggedOutItems.propTypes = {
  items: desktopLoggedOutItemsDataShape
}

const DesktopHeaderUserMenu = ({menu}) => {
  return menu.map((group, index) => (
    // eslint-disable-next-line react/jsx-no-comment-textnodes,react/no-array-index-key
    <React.Fragment key={index}>
      {group.heading && <div className="dropdown-header" role="heading" aria-level="1">{group.heading}</div>}
      {group.items.map(({
        type, content, href, disabled, isActive, onClick,
      }) => (
        <a
          className={`dropdown-${type}${isActive ? ' active' : ''}${disabled ? ' disabled' : ''}`}
          key={`${type}-${content}`}
          href={href}
          onClick={onClick || null}
        >
          {content}
        </a>
      ))}
      {index < menu.length - 1 && <div className="dropdown-divider" role="separator" />}
    </React.Fragment>
  ));
}

DesktopHeaderUserMenu.propTypes = {
  menu: desktopUserMenuDataShape
}

class DesktopHeader extends React.Component {
  constructor(props) { // eslint-disable-line no-useless-constructor
    super(props);
  }

  renderMainMenu() {
    const { mainMenu } = this.props;
    return <DesktopMainMenuSlot menu={mainMenu}/>;
  }

  renderSecondaryMenu() {
    const { secondaryMenu } = this.props;
    return <DesktopSecondaryMenuSlot menu={secondaryMenu}/>
  }

  renderUserMenu() {
    const {
      userMenu,
      avatar,
      username,
      intl,
    } = this.props;

    return (
      <Menu transitionClassName="menu-dropdown" transitionTimeout={250}>
        <MenuTrigger
          tag="button"
          aria-label={intl.formatMessage(messages['header.label.account.menu.for'], { username })}
          className="btn btn-outline-primary d-inline-flex align-items-center pl-2 pr-3"
        >
          <Avatar size="1.5em" src={avatar} alt="" className="mr-2" />
          {username} <CaretIcon role="img" aria-hidden focusable="false" />
        </MenuTrigger>
        <MenuContent className="mb-0 dropdown-menu show dropdown-menu-right pin-right shadow py-2">
          <DesktopUserMenuSlot menu={userMenu} />
        </MenuContent>
      </Menu>
    );
  }

  renderLoggedOutItems() {
    const { loggedOutItems } = this.props;
    return <DesktopLoggedOutItemsSlot items={loggedOutItems}/>
  }

  render() {
    const {
      logo,
      logoAltText,
      logoDestination,
      loggedIn,
      intl,
    } = this.props;
    const logoProps = { src: logo, alt: logoAltText, href: logoDestination };
    const logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'mw-100' : null;

    return (
      <header className="site-header-desktop">
        <a className="nav-skip sr-only sr-only-focusable" href="#main">{intl.formatMessage(messages['header.label.skip.nav'])}</a>
        <div className={`container-fluid ${logoClasses}`}>
          <div className="nav-container position-relative d-flex align-items-center">
            <LogoSlot {...logoProps} />
            <nav
              aria-label={intl.formatMessage(messages['header.label.main.nav'])}
              className="nav main-nav"
            >
              {this.renderMainMenu()}
            </nav>
            <nav
              aria-label={intl.formatMessage(messages['header.label.secondary.nav'])}
              className="nav secondary-menu-container align-items-center ml-auto"
            >
              {loggedIn
                ? (
                  <>
                    {this.renderSecondaryMenu()}
                    {this.renderUserMenu()}
                  </>
                ) : this.renderLoggedOutItems()}
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

const desktopHeaderDataShape = {
  mainMenu: desktopHeaderMainOrSecondaryMenuDataShape,
  secondaryMenu: desktopHeaderMainOrSecondaryMenuDataShape,
  userMenu: desktopUserMenuDataShape,
  loggedOutItems: desktopLoggedOutItemsDataShape,
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  loggedIn: PropTypes.bool,
}

DesktopHeader.propTypes = {
  ...desktopHeaderDataShape,

  // i18n
  intl: intlShape.isRequired,
};

DesktopHeader.defaultProps = {
  mainMenu: [],
  secondaryMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false,
};

export { DesktopHeaderMainOrSecondaryMenu, DesktopHeaderUserMenu, DesktopLoggedOutItems, desktopHeaderDataShape };
export default injectIntl(DesktopHeader);
