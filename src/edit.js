import { RichText, useBlockProps } from '@wordpress/block-editor'
import { useEffect, useRef } from 'react'
import { __ } from '@wordpress/i18n'
import Panel from './panel'

/** just clean p tags */
const clean = (string) => {
  return string.replace(/<br\/?>/gim, '\r\n').replace(/<[^>]*>?/gim, '')
}

const Edit = (props) => {
  const { attributes, setAttributes } = props
  const { language, showNumber, lineHighlight, content } = attributes
  const blockProps = useBlockProps({})
  const textEditor = useRef()
  const highlight = () => {
    // if (window.Prism) {
    //   Prism.highlightAll()
    // }
  }
  // useEffect(highlight, [])
  return (
    <div {...blockProps}>
      <pre
        className={`prism-my-code-block  language-${language} ${
          showNumber ? 'line-numbers' : ''
        } language-diff-${language} diff-highlight
        `}
        data-line={lineHighlight}
      >
        <Panel props={props} />
        <RichText
          onBlur={highlight}
          ref={textEditor}
          className=""
          tagName="code"
          withoutInteractiveFormatting
          allowedFormats={[]}
          preserveWhiteSpace
          value={content}
          onChange={(content) => setAttributes({ content: clean(content) })}
        />
      </pre>
    </div>
  )
}

export default Edit
