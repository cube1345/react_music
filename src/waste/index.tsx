// import React, { memo, useRef } from 'react';
// import type { FC } from 'react';
// import { Carousel } from 'antd';
// import type { CarouselRef } from 'antd/es/carousel';
// import {
//   AlbumWrapper,
//   Content,
//   Banner,
//   AlbumGroup,
//   AlbumItem,
//   AlbumCover,
//   AlbumName,
//   SingerName,
//   CarouselButton
// } from './style';
// import albumData from '@/assets/data/new_album.json';

// const NewAlbum: FC = () => {
//   const carouselRef = useRef<CarouselRef>(null);

//   const handlePrevClick = () => {
//     carouselRef.current?.prev();
//   };

//   const handleNextClick = () => {
//     carouselRef.current?.next();
//   };

//   return (
//     <AlbumWrapper>
//       <Content>
//         <CarouselButton className="arrow-left" onClick={handlePrevClick}>
//           &lt;
//         </CarouselButton>
//         <Banner>
//           <Carousel ref={carouselRef} dots={false}>
//             {/* 第一页 */}
//             <AlbumGroup>
//               {albumData.slice(0, 5).map((item) => (
//                 <AlbumItem key={item.key}>
//                   <AlbumCover>
//                     <img src={item.url} alt={item.name} />
//                   </AlbumCover>
//                   <AlbumName>
//                     <a href={item.namelink} target="_blank" rel="noopener noreferrer">
//                       {item.name}
//                     </a>
//                   </AlbumName>
//                   <SingerName>
//                     <a href={item.singerlink} target="_blank" rel="noopener noreferrer">
//                       {item.singer}
//                     </a>
//                   </SingerName>
//                 </AlbumItem>
//               ))}
//             </AlbumGroup>
//             {/* 第二页 */}
//             <AlbumGroup>
//               {albumData.slice(5, 10).map((item) => (
//                 <AlbumItem key={item.key}>
//                   <AlbumCover>
//                     <img src={item.url} alt={item.name} />
//                   </AlbumCover>
//                   <AlbumName>
//                     <a href={item.namelink} target="_blank" rel="noopener noreferrer">
//                       {item.name}
//                     </a>
//                   </AlbumName>
//                   <SingerName>
//                     <a href={item.singerlink} target="_blank" rel="noopener noreferrer">
//                       {item.singer}
//                     </a>
//                   </SingerName>
//                 </AlbumItem>
//               ))}
//             </AlbumGroup>
//           </Carousel>
//         </Banner>
//         <CarouselButton className="arrow-right" onClick={handleNextClick}>
//           &gt;
//         </CarouselButton>
//       </Content>
//     </AlbumWrapper>
//   );
// };

// export default memo(NewAlbum);
