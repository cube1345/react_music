import styled, { css } from 'styled-components';

// 精灵图配置（根据实际精灵图调整）
const SPRITE_CONFIG = {
  width: 330,
  height: 330,     // 精灵图总高度(px)
  iconSize: 45,    // 单个图标大小(px)
  columns: 7,      // 每行图标数量
  rows: 1,         // 每列图标数量
  path: 'src/assets/img/footer-group.jpg'
};


const iconPositions: Record<string, { x: number; y: number }> = {
  musicOpen: { x: 0, y: 3 },
  cloudVillage: { x: 1, y: 0 },
  xStudio: { x: 2, y: 0 },
  userAuth: { x: 3, y: 0 },
  aiWrite: { x: 4, y: 0 },
  cloudPush: { x: 5, y: 0 },
  reward: { x: 6, y: 0 },
  serviceTerms: { x: 0, y: 1 },
  privacyPolicy: { x: 1, y: 1 },
  childPolicy: { x: 2, y: 1 },
  copyright: { x: 3, y: 1 },
  investor: { x: 4, y: 1 },
  cooperation: { x: 5, y: 1 },
  contact: { x: 6, y: 1 }
};


export const SpriteIcon = styled.span<{ iconType: keyof typeof iconPositions }>`
  display: inline-block;
  width: ${SPRITE_CONFIG.iconSize}px;
  height: ${SPRITE_CONFIG.iconSize}px;
  background-image: url(${SPRITE_CONFIG.path});
  background-size: ${SPRITE_CONFIG.width}px ${SPRITE_CONFIG.height}px;
  background-repeat: no-repeat;
  margin-right: 8px;
  border-radius: 50%;
  transition: transform 0.2s;

  ${({ iconType }) => {
    const position = iconPositions[iconType];
    const x = position.x * SPRITE_CONFIG.iconSize;
    const y = position.y * SPRITE_CONFIG.iconSize;
    return css`
      background-position: -${x}px -${y}px;
    `;
  }}

  &:hover {
    transform: scale(1.1);
  }
`;

// 链接文本组件
export const LinkText = styled.span`
  color: #666;
  font-size: 14px;
  transition: color 0.2s;
`;

// 图标链接组件
export const IconLink = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;

  &:hover ${SpriteIcon} {
    border-color: #ff506f;
  }

  &:hover ${LinkText} {
    color: #ff506f;
  }
`;

// 页脚容器
export const FooterWrapper = styled.footer`
  text-align: center;
  padding: 30px 15px;
  background-color: #f8f8f8;
  border-top: 1px solid #eee;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

// 链接组
export const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

// 文本组
export const TextGroup = styled.div`
  color: #999;
  line-height: 22px;
  font-size: 12px;
  margin-bottom: 8px;
  word-break: keep-all;

  a {
    color: #999;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    line-height: 18px;
  }
`;

// 分隔线
export const Separator = styled.span`
  margin: 0 8px;
  color: #ddd;
`;
