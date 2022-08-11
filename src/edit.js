import { RichText, useBlockProps } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import Panel from './panel'

/** just clean p tags */
const removeParagraph = (string) => {
  return string.replace(/<p>/gi, '').replace(/<\/p>/gi, '')
}

const Edit = (props) => {
  const { attributes, setAttributes } = props
  const { language, showNumber, lineHighlight, content } = attributes
  const blockProps = useBlockProps({})

  return (
    <div {...blockProps}>
      <pre
        className={`prism-my-code-block language-${language} ${
          showNumber ? 'line-numbers' : ''
        }`}
        data-line={lineHighlight}
      >
        <Panel props={props} />
        <RichText
          className=""
          tagName="code"
          allowedFormats={[]}
          preserveWhiteSpace
          value={content}
          onChange={(content) =>
            setAttributes({ content: removeParagraph(content) })
          }
        />
      </pre>
    </div>
  )
}

export default Edit
