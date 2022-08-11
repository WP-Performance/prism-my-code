import { RichText, useBlockProps } from '@wordpress/block-editor'

const Save = (props) => {
  const { language, showNumber, lineHighlight, content } = props.attributes
  const blockProps = useBlockProps.save({})

  return (
    <div {...blockProps}>
      <pre
        className={`prism-my-code-block language-${language} ${
          showNumber ? 'line-numbers' : ''
        }`}
        data-line={lineHighlight}
      >
        <RichText.Content tagName="code" value={content} />
      </pre>
    </div>
  )
}

export default Save
