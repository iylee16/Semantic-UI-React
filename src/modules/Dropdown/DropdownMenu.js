import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  ElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  const { children, className, content, scrolling } = props
  const classes = cx(
    useKeyOnly(scrolling, 'scrolling'),
    'menu transition',
    className,
  )
  const rest = getUnhandledProps(DropdownMenu, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

DropdownMenu._meta = {
  name: 'DropdownMenu',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A dropdown menu can scroll. */
  scrolling: PropTypes.bool,
}

export default DropdownMenu
