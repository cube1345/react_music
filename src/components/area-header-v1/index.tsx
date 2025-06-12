import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { HeaderV1Wrapper } from './style';
import { Link } from 'react-router-dom';

interface AreaHeaderV1Props {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const AreaHeaderV1: FC<AreaHeaderV1Props> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props;

  return (
    <HeaderV1Wrapper className="sprite_02">
      <img
        src='src/assets/img/icon2.jpg'
        alt='唉唉精灵图怎么这么烦啊'
        className='icon-start'
      />
      <div className="left">
        <div className="title">{title}</div>
        <div className="keywords">
          {keywords.map((item, index) => (
            <div className="item" key={item}>
              <span className="text">{item}</span>
              {index < keywords.length - 1 && <span className="divider">|</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>{moreText}</Link>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderV1Wrapper>
  );
};

export default memo(AreaHeaderV1);
