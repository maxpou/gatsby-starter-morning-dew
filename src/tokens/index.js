import colorDefaults from './colors'
import mediaDefaults from './media'
import theme from '../theme'

export const colors = { ...colorDefaults, ...(theme.colors || {}) }
export const media = { ...mediaDefaults, ...(theme.media || {}) }
export default { colors, media }
