import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ObfuscateMailto(props) {
  const {
    element,
    children,
    email,
    headers,
    obfuscate,
    obfuscateChildren,
    linkText,
    style,
    onClick,
    ...others
  } = props;

  const [ humanInteraction, setHumanInteraction ] = useState(false);
  const linkProps = children || email;
  const Component = element;

  const generateLink = () => {
    let link = '';

    // Combine email header parameters for use with email
    const combineHeaders = (params) => {
      return Object.keys(params)
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');
    };

    if (email) {
      link = `mailto:${email}`;

      if (headers) {
        link += `?${combineHeaders(headers)}`;
      }
    }

    return link;
  };

  const handleClick = () => {
    // Allow instantiator to provide an onClick method to be called
    // before we change location (e.g. for analytics tracking)
    if (onClick && typeof onClick === 'function') {
      onClick();
    }

    // If focused or hovered, this js will be skipped with preference for html
    if (humanInteraction === false && typeof window !== 'undefined') {
      window.location.href = generateLink({
        email,
        headers,
      });
    }
  };

  const reverse = (content) =>
    typeof content !== 'undefined' &&
    content.split('').reverse().join('').replace('(', ')').replace(')', '(');

  const obfuscatedStyle = {
    ...style,
    unicodeBidi: 'bidi-override',
    direction:
      humanInteraction === true ||
      obfuscate === false ||
      obfuscateChildren === false
        ? 'ltr'
        : 'rtl',
  };

  const renderedLink =
    humanInteraction === true ||
    obfuscate === false ||
    typeof children === 'object' ||
    obfuscateChildren === false // Allow child elements
      ? linkProps
      : reverse(linkProps);

  const clickProps =
    Component === 'a'
      ? {
          href:
            humanInteraction === true || obfuscate === false
              ? generateLink()
              : linkText || 'obfuscated',
          onClick: handleClick,
        }
      : {};

  return (
    <Component
      onFocus={() => setHumanInteraction(true)}
      onMouseOver={() => setHumanInteraction(true)}
      onContextMenu={() => setHumanInteraction(true)}
      {...others}
      {...clickProps}
      style={obfuscatedStyle}
    >
      {renderedLink}
    </Component>
  );
}

ObfuscateMailto.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node,
  email: PropTypes.string,
  headers: PropTypes.shape({}),
  obfuscate: PropTypes.bool,
  obfuscateChildren: PropTypes.bool,
  linkText: PropTypes.string,
  style: PropTypes.shape({}),
  onClick: PropTypes.func,
};

ObfuscateMailto.defaultProps = {
  element: 'a',
  children: undefined,
  email: undefined,
  headers: undefined,
  obfuscate: undefined,
  obfuscateChildren: undefined,
  linkText: undefined,
  style: {},
  onClick: undefined,
};

export default ObfuscateMailto;
