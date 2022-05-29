//  industry_nav
export let industryNav = {
    data() {
        return {
            nav_list: [
                {name: '林业', path: ''},
                {name: '农业', path: ''},
                {name: '绿化', path: ''},
                {name: '采矿', path: ''},
                {name: '物料搬运', path: ''},
                {name: '普通工程', path: ''},
                {name: '拆迁', path: ''},
                {name: '基建', path: ''},

            ]
        }
    },
    template: `
         <div class="industryNav" id="industryNav">
            <div class="center_wrap">
              <div class="industry_nav_list">
                <div class="industry_nav_item" v-for="(item,path,index) in nav_list" :key="index">
                  <a href="">
                    <div class="wrap">
                      <h4>{{ item.name }}</h4>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
        `
}
