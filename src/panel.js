import {
  PanelBody,
  ToggleControl,
  TextControl,
  SelectControl,
} from '@wordpress/components'
import { InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import { optionsLanguages } from './options'

const Panel = ({ props }) => {
  const { attributes, setAttributes } = props
  const { language, showNumber, lineHighlight, theme } = attributes
  return (
    <InspectorControls>
      <PanelBody title={__('Lines numbers', 'prism-my-code')}>
        <ToggleControl
          label={__('show number lines', 'prism-my-code')}
          checked={showNumber}
          onChange={() => setAttributes({ showNumber: !showNumber })}
        />
        <TextControl
          label={__('Lines Highlight', 'prism-my-code')}
          value={lineHighlight}
          help={__(
            'Comma separated line numbers. You can use range with -. Example: 1,10,3-5',
            'prism-my-code',
          )}
          onChange={(lineHighlight) => setAttributes({ lineHighlight })}
        />
      </PanelBody>
      <PanelBody title={__('Language', 'prism-my-code')}>
        <SelectControl
          label={__('Language', 'prism-my-code')}
          value={language}
          options={optionsLanguages}
          onChange={(language) => setAttributes({ language })}
        />
      </PanelBody>
    </InspectorControls>
  )
}

export default Panel
