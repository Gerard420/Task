import {indexHeader} from '../../../components/index/index_header/indexHeader.js'
import {indexBodyAbout} from '../../../components/index/index_body/about/indexBodyAbout.js'
import {indexFooter} from '../../../components/index/index_footer/indexFooter.js'

 Vue.createApp({
    components: {
        indexHeader,
        indexBodyAbout,
        indexFooter
    },
    template: `
          <div class="index_about" id="index_about">
          <indexHeader></indexHeader>
          <indexBodyAbout></indexBodyAbout> 
          <indexFooter></indexFooter>
          </div>
        `
}).mount('#root_about');
