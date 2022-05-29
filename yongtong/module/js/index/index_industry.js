import {indexHeader} from '../../../components/index/index_header/indexHeader.js'
import {indexFooter} from '../../../components/index/index_footer/indexFooter.js'
import {industryNav} from '../../../components/index/index_body/industry/industryNav.js'
import {industryContent} from '../../../components/index/index_body/industry/industryContent.js'


Vue.createApp({
    components: {
        indexHeader,
        indexFooter,
        industryNav,
        industryContent
    },
    template: `
          <div class="index_industry" id="index_industry">
          <indexHeader></indexHeader>
          <industryNav></industryNav>
          <industryContent></industryContent>
          <indexFooter></indexFooter>
          </div>
        `
}).mount('#root_industry');
