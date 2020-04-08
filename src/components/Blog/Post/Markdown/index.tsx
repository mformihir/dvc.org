import React from 'react'

import styles from './styles.module.css'

interface IMarkdownProps {
  html: string
}

const Markdown: React.SFC<IMarkdownProps> = ({ html }) => (
  <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: html }} />
)

export default Markdown
