import React from 'react'

import GithubLink from 'components/atoms/GithubLink'
import Wrapper from './__styled__/Wrapper'

const AppInfo = () => {
  return (
    <Wrapper>
      <GithubLink />
      Version: {process.env.REACT_APP_VERSION}
    </Wrapper>
  );
}

export default React.memo(AppInfo)
