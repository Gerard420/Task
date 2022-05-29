import {shoppingHeader} from '../../../components/shopping/shopping_header/shoppingHeader.js'
import {indexFooter} from '../../../components/index/index_footer/indexFooter.js'
import {shoppingSearch} from '../../../components/shopping/shopping_search/shoppingSearch.js'


Vue.createApp({
    components: {
        shoppingHeader,
        shoppingSearch,
        indexFooter
    },
    template: `
          <div class="shopping_index" id="shopping_index">
          <shoppingHeader></shoppingHeader>
          <shoppingSearch></shoppingSearch>
          <div class="shoppingGoods" id="shoppingGoods">
            <div class="center_wrap">
                <div class="shopping_list" id="shopping_list"></div>
            </div>
          </div>
          <indexFooter></indexFooter>
          </div>
        `
}).mount('#root_shopping_index');

//  节点挂载
let oList = document.getElementById('shopping_list');
let oItem = document.getElementsByClassName('shopping_goods_item');

let num = oItem.length;
for (let i = 0; i <= num; i++) {
    oList.appendChild(oItem[i]);
}


