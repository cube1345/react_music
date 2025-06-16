import hyRequest from '@/service';

export function getBanners() {
  return hyRequest.get({
    url: '/banner',
  });
}

export function getHotRecommend(limit = 30) {
  return hyRequest
    .get({
      url: '/personalized',
      params: {
        limit,
      },
    })
    .catch(error => {
      console.error('获取热门推荐失败:', error);
      throw error;
    });
}
