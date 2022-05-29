import {indexHeader} from '../../../components/index/index_header/indexHeader.js'
import {homeBanner} from '../../../components/index/index_body/home/homeBanner.js'
import {homeGoods} from '../../../components/index/index_body/home/homeGoods.js'
import {homeNews} from '../../../components/index/index_body/home/homeNews.js'
import {indexFooter} from '../../../components/index/index_footer/indexFooter.js'

Vue.createApp({
    components: {
        indexHeader,
        homeBanner,
        homeGoods,
        homeNews,
        indexFooter
    },
    template: `
          <div class="index" id="index">
          <indexHeader></indexHeader>
          <homeBanner></homeBanner>
          <homeGoods></homeGoods>
          <homeNews></homeNews>
          <indexFooter></indexFooter>
          </div>
        `
}).mount('#root_home');

new Swiper('.banner .swiper-container', {
    //自动滑动
    autoplay: true,
    // 回环
    loop: true,
    // 分页
    pagination: {
        el: '.swiper-pagination',
    },
})




