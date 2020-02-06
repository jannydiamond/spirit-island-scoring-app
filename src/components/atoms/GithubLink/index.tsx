import React from 'react'

import Logo from './__styled__/Logo'
import Link from './__styled__/Link'

const GithubLink = () => {
  return (
    <Link
      href="https://github.com/jannydiamond/spirit-island-scoring-app"
      target="_blank"
    >
      <Logo src="images/github-logo.svg" alt="SVG: Github logo" />
      Github
    </Link>
  )
}

export default React.memo(GithubLink)
