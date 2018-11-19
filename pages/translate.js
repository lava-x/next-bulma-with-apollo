import React from 'react';
import Link from 'next/link';

// import PureComponent from '../components/PureComponent';
// import ExtendedComponent from '../components/ExtendedComponent'
// import ComponentWithTrans from '../components/ComponentWithTrans';
import { Trans } from 'react-i18next';
import { withI18next } from 'config/with-i18next';
import i18n from 'config/i18n';
import { withRouter } from 'next/router';

const Test = ({ t, router }) => (
  <div className="full-height-min pl20 pl20">
    <h1>{t('welcome')}</h1>
    <p>{t('common:integrates_react-i18next')}</p>
    <p>{t('sample_test')}</p>

    <ul>
      <li>
        {/* <Link href={`${router.pathname}`}> */}
        <a onClick={() => i18n.changeLanguage('en')}>en</a>
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href={`${router.pathname}?lng=de`}> */}
        <a onClick={() => i18n.changeLanguage('de')}>de</a>
        {/* </Link> */}
      </li>
    </ul>

    <div>
      <button>{t('sample_button')}</button>
    </div>
    <p>{t('common:pureComponent')}</p>
    <p>{t('common:extendedComponent')}</p>
    <Trans i18nKey="common:transComponent">
      Alternatively, you can use <code>Trans</code> component.
    </Trans>
    <Link href="/page2">
      <a>{t('link.gotoPage2')}</a>
    </Link>
    <br />
    <Link href="/page3">
      <a>{t('link.gotoPage3')}</a>
    </Link>
  </div>
);

export default withRouter(withI18next(['home', 'common'])(Test));
