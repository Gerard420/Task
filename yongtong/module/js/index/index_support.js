import {indexHeader} from '../../../components/index/index_header/indexHeader.js'
import {indexFooter} from '../../../components/index/index_footer/indexFooter.js'
import {supportNav} from '../../../components/index/index_body/support/supportNav.js'
import {supportContent} from '../../../components/index/index_body/support/supportContent.js'


Vue.createApp({
    components: {
        indexHeader,
        indexFooter,
        supportNav,
        supportContent
    },
    template: `
          <div class="index_support" id="index_support">
          <indexHeader></indexHeader>
          <supportNav></supportNav>
          <supportContent></supportContent>
          <indexFooter></indexFooter>
          </div>
        `
}).mount('#root_support');
