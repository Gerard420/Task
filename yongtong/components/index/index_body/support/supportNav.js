//  support_nav
export let supportNav = {
    data() {
        return {
            nav_list: [
                {name: '正品配件', path: ''},
                {name: '正品维护', path: ''},
                {name: '附属装配', path: ''},
                {name: '质保服务', path: ''},
                {name: '设备租聘', path: ''},
                {name: '二手设备', path: ''},
                {name: '售后网点', path: ''},
                {name: '远程指导', path: ''},
            ]
        }
    },
    template: `
           <div class="supportNav" id="supportNav">
            <div class="center_wrap">
              <div class="support_nav_list">
                <div class="support_nav_item" v-for="(item,path,index) in nav_list" :key="index">
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
