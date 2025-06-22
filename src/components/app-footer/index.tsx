import React from 'react';
import {
  FooterWrapper,
  LinkGroup,
  TextGroup,
  IconLink,
  LinkText,
  Separator,
} from './style';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      {/* 第一行图标链接 */}
      <LinkGroup>
        <IconLink>
          <LinkText>音乐开放平台</LinkText>
        </IconLink>
        <IconLink>
          <LinkText>云村交易所</LinkText>
        </IconLink>
        <IconLink>
          <LinkText>X Studio AI歌手</LinkText>
        </IconLink>
        <IconLink>
          <LinkText>用户认证</LinkText>
        </IconLink>
        <IconLink>
          <LinkText>AI免费写歌</LinkText>
        </IconLink>
        <IconLink>
          <LinkText>云推歌</LinkText>
        </IconLink>
        <IconLink>
          <LinkText>赞赏</LinkText>
        </IconLink>
      </LinkGroup>

      <LinkGroup>
        <LinkText>服务条款</LinkText>
        <Separator>|</Separator>
        <LinkText>隐私政策</LinkText>
        <Separator>|</Separator>
        <LinkText>儿童隐私政策</LinkText>
        <Separator>|</Separator>
        <LinkText>版权投诉</LinkText>
        <Separator>|</Separator>
        <LinkText>投资者关系</LinkText>
        <Separator>|</Separator>
        <LinkText>广告合作</LinkText>
        <Separator>|</Separator>
        <LinkText>联系我们</LinkText>
      </LinkGroup>

      <TextGroup>
        廉正举报 不良信息举报邮箱:{' '}
        <a href="mailto:51jubao@service.netease.com">
          51jubao@service.netease.com
        </a>
      </TextGroup>

      <TextGroup>
        互联网宗教信息服务许可证: 浙 (2022) 0000120 增值电信业务经营许可证:
        浙B2-20150198 粤B2-20090191-18 浙ICP备15006616号-4
        工业和信息化部备案管理系统网站
      </TextGroup>

      <TextGroup>
        网易公司版权所有©1997-2025 杭州乐读科技有限公司运营: 浙网文[2024]
        0900-042号
        <span role="img" aria-label="police">
          🚓
        </span>
        浙公网安备 33010802013307号 算法服务公示信息
      </TextGroup>
    </FooterWrapper>
  );
};

export default Footer;
