import React, { PureComponent } from 'react';
import styles from './styles';
import Posts from 'containers/Posts';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home full-height-min flex-vertical-center">
        <Posts />
        <style jsx>{styles}</style>
      </div>
    );
  }
}
