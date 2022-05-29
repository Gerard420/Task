//  index_header
export let indexHeader = {
    methods: {
        navHidden() {
            this.isShow = !this.isShow;
        }
    },

    data() {
        return {
            nav_list: [
                {name: '服务产品', path: '../../../../yongtong/views/index/index_goods.php'},
                {name: '行业方案', path: '../../../../yongtong/views/index/index_industry.php'},
                {name: '支持与服务', path: '../../../../yongtong/views/index/index_support.php'},
                {name: '新闻', path: '../../../../yongtong/views/index/index_news.php'},
                {name: '关于我们', path: '../../../../yongtong/views/index/index_about.php'},
                {name: '商城', path: '../../../../yongtong/views/customer/customer_login.php'}
            ],
            isShow: false,
        }
    },
    template: `
          <div id="indexHeader" class="indexHeader">
          <!--  顶部  -->
          <div class="header_top">
            <div class="center_wrap">
              <div class="wrap">
                <div class="top_left">
                  <div class="list">
                    <div class="link" id="link" @click="navHidden(i)">快速链接</div>
                    <sapn class="icon"></sapn>
                  </div>
                  <div class="list">
                    <div class="language">语言</div>
                    <sapn class="icon"></sapn>
                  </div>
                </div>
                <div class="top_right">
                  <div>
                    <input type="text">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  导航  -->
          <div class="header_nav">
            <div class="center_wrap">
              <div class="logo">
                <a href="../../../yongtong/views/index/index.php">
                  <h1>永通</h1>
                </a>
              </div>
              <div class="nav" id="nav">
                <ul>
                  <li v-for="(item,index) in nav_list" :key="index" >
                    <a :href="item.path" class="list_link">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
<!--     nav_hidden     -->
            <div class="nav_hidden" id="nav_hidden" v-show="isShow">
        <div class="nav_hidden_list">
            <div class="nav_hidden_icon"></div>
            <div class="nav_hidden_item">
                <a href="../../../../yongtong/views/index/index.php"><h3>公司主页</h3></a>
            </div>
            <div class="nav_hidden_item">
                <a href="../../../../yongtong/views/admin/admin_login.php"><h3>后台管理系统</h3></a>
            </div>
            <div class="nav_hidden_item">
                <a href="#"><h3>远程指导系统</h3></a>
            </div>
            <div class="nav_hidden_item">
                <a href="#"><h3>新闻管理系统</h3></a>
            </div>
            <div class="nav_hidden_item">
                <a href="#"><h3>员工管理系统</h3></a>
            </div>
        </div>
    </div>
          </div>
        `
}




