//  goods_nav
export let goodsNav = {
    data() {
        return {
            nav_list: [
                {name: '起重机', path: ''},
                {name: '挖掘机', path: ''},
                {name: '推土机', path: ''},
                {name: '压路机', path: ''},
                {name: '铣刨机', path: ''},
                {name: '装载机', path: ''},
                {name: '平路机', path: ''},
                {name: '高空作业平台', path: ''},

            ]
        }
    },
    template: `
          <div class="goodsNav" id="goodsNav">
            <div class="center_wrap">
              <div class="goods_nav_list">
                <div class="goods_nav_item" v-for="(item,index) in nav_list" :key="index">
                  <a href="">
                    <div class="wrap">
                      <h4>{{ item.name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
        `
}
