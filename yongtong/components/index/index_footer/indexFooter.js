//  index_footer
export let indexFooter = {
    data() {
        return {
            nav_goods: ['起重机', '推土机', '装载机', '压路机', '挖掘机', '平地机', '高空作业平台', '矿用卡车', '叉车'],
            nav_industry: ['农业', '林业', '矿山', '港口', '普通工程', '物料搬运', '油气田', '道路建设'],
            nav_support: ['维修', '产品维护', '远程支持', '设备出租', '二手设备', '三包咨询'],
            nav_tool: ['查找经销商', '查找服务站', '查找车辆'],
            nav_about: ['关于永通', '永通现状', '关于柳工', '相关新闻']
        }
    },
    template: `
  <div id="indexFooter" class="indexFooter">
    <div class="footer_top">
      <div class="footer_logo">
        <div class="center_wrap">
          <div class="logo_img">
            <img src="../../../../yongtong/resources/img/logo/logo_small_dark.png" alt="footer_logo">
          </div>
        </div>
      </div>
      <div class="footer_nav">
        <div class="center_wrap">
          <div class="nav_list">
            <div class="list_item">
              <h5>产品</h5>
              <div class="list_wrap">
                <ul>
                  <li v-for="(item,index) in nav_goods" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="list_item">
              <h5>行业方案</h5>
              <div class="list_wrap">
                <ul>
                  <li v-for="(item,index) in nav_industry" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="list_item">
              <h5>支持服务</h5>
              <div class="list_wrap">
                <ul>
                  <li v-for="(item,index) in nav_support" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="list_item">
              <h5>工具</h5>
              <div class="list_wrap">
                <ul>
                  <li v-for="(item,index) in nav_tool" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="list_item">
              <h5>关于我们</h5>
              <div class="list_wrap">
                <ul>
                  <li v-for="(item,index) in nav_about" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="center_wrap">
        <div class="footer_information">
          <div>蚌埠永通工程机械有限公司 版权所有</div>
          <div>法律声明</div>
          <div>联系我们</div>
        </div>
      </div>
    </div>
  </div>
        `
}



