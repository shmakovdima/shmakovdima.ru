import React from "react"
import { withTranslation } from 'react-i18next';

const IndexPage = props => {
  const { t } = props;

  return (
    <div>{t('hello')}</div>
  )
}

export default withTranslation('index')(IndexPage)