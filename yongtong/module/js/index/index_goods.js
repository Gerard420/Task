import {indexHeader} from '../../../components/index/index_header/indexHeader.js'
import {goodsNav} from '../../../components/index/index_body/goods/goodsNav.js'
import {goodsContent} from '../../../components/index/index_body/goods/goodsContent.js'
import {indexFooter} from '../../../components/index/index_footer/indexFooter.js'

Vue.createApp({
    components: {
        indexHeader,
        goodsNav,
        goodsContent,
        indexFooter
    },
    template: `
          <div class="index_goods" id="index_goods">
          <indexHeader></indexHeader>
          <goodsNav></goodsNav>
          <goodsContent></goodsContent>
          <indexFooter></indexFooter>
          </div>
        `
}).mount('#root_goods');
