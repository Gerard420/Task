import {indexHeader} from '../../../components/index/index_header/indexHeader.js'
import {indexFooter} from '../../../components/index/index_footer/indexFooter.js'
import {indexNews} from '../../../components/index/index_body/news/indexNews.js'


Vue.createApp({
    components: {
        indexHeader,
        indexFooter,
        indexNews
    },
    template: `
          <div class="index_news" id="index_news">
          <indexHeader></indexHeader>
          <indexNews></indexNews>
          <indexFooter></indexFooter>
          </div>
        `
}).mount('#root_news');
