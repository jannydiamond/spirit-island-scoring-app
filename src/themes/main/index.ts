import Colors from 'themes/main/global/Colors'
import Typography from 'themes/main/global/Typography'
import ZIndex from 'themes/main/global/ZIndex'
import ScoringDetail from 'themes/main/pages/ScoringDetail'
import Scorings from 'themes/main//pages/Scorings'
import Menu from 'themes/main/components/Menu'
import Header from 'themes/main/components/Header'
import Navigation from 'themes/main/components/Navigation'
import FloatingButton from 'themes/main/components/FloatingButton'
import Divider from 'themes/main/components/Divider'
import GithubLink from 'themes/main/components/GithubLink'
import BackLink from 'themes/main/components/BackLink'
import LabeledText from 'themes/main/components/LabeledText'
import Scoring from 'themes/main/components/Scoring'
import SpiritBadge from 'themes/main/components/SpiritBadge'
import ScoringInfoList from 'themes/main/components/ScoringInfoList'
import Tile from 'themes/main/components/Tile'
import Checkbox from 'themes/main/components/Checkbox'

const main = {
  colors: {
    ...Colors,
  },
  typography: {
    ...Typography,
  },
  zIndex: {
    ...ZIndex,
  },
  components: {
    // atoms
    backLink: {
      ...BackLink,
    },
    checkbox: {
      ...Checkbox,
    },
    divider: {
      ...Divider,
    },
    floatingButton: {
      ...FloatingButton,
    },
    githubLink: {
      ...GithubLink,
    },
    labeledText: {
      ...LabeledText,
    },
    scoring: {
      ...Scoring,
    },
    scoringInfoList: {
      ...ScoringInfoList,
    },
    spiritBadge: {
      ...SpiritBadge,
    },
    tile: {
      ...Tile,
    },
    // molecules
    header: {
      ...Header,
    },
    navigation: {
      ...Navigation,
    },
    // organisms
    menu: {
      ...Menu,
    },
  },
  pages: {
    scoringDetail: {
      ...ScoringDetail,
    },
    scorings: {
      ...Scorings,
    },
  },
}

export default main
