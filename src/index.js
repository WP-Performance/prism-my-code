import { registerBlockType } from '@wordpress/blocks'

import edit from './edit'
import save from './save'
import attributes from './attributes'

registerBlockType('wp-performance/prism-my-code', {
  icon: 'media-code',
  example: {},
  attributes,
  edit,
  save,
})
