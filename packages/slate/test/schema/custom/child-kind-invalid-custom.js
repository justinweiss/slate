/** @jsx h */

import h from '../../helpers/h'

export const schema = {
  blocks: {
    paragraph: {},
    quote: {
      nodes: [
        { kinds: ['block'] },
      ],
      normalize: (change, reason, { child }) => {
        if (reason == 'child_kind_invalid') {
          change.wrapBlockByKey(child.key, 'paragraph')
        }
      }
    }
  }
}

export const input = (
  <value>
    <document>
      <quote>
        text
      </quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <quote>
        <paragraph>
          text
        </paragraph>
      </quote>
    </document>
  </value>
)
