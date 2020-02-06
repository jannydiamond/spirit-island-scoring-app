import React from 'react'

import Link from './_styled_/Link'
import Icon from './_styled_/Icon'

type Props = {
  to: string
  label: string
}

const BackLink = ({ to, label }: Props) => (
  <Link to={to}>
    <Icon className="material-icons">chevron_left</Icon>{label}
  </Link>
)

export default BackLink
