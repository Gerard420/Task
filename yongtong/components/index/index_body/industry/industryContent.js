//  industry_content
export let industryContent = {
    data() {
        return {
            list: [
                {name: '装载机', path: '', url: '../../../../../yongtong/resources/img/index_industry/recommend/1.png'},
                {name: '挖掘机', path: '', url: '../../../../../yongtong/resources/img/index_industry/recommend/2.png'},
                {name: '推土机', path: '', url: '../../../../../yongtong/resources/img/index_industry/recommend/3.png'},
                {name: '平地机', path: '', url: '../../../../../yongtong/resources/img/index_industry/recommend/4.png'}
            ]
        }
    },
    template: `
           <div class="industryContent" id="industryContent">
                <div class="banner">
                  <div class="center_wrap">
                    <div class="banner_img"></div>
                    <div class="title">
                      <h3>林业方案，品质标杆</h3>
                    </div>
                    <div class="word">
                      <p>相信柳工能够为您的所有林业需求提供合适的解决方案。无论是森林经营，树木采伐<br/>还是木材加工，我们均有适合的产品系列给您一个满意的选择。</p>
                    </div>
                  </div>
                </div>
            
                <div class="content">
                  <div class="center_wrap">
                    <div class="title">
                      <h4>林业</h4>
                    </div>
                    <div class="word">
                      <p>当开展林业项目时，柳工是您值得信赖的伙伴。我们经验丰富的专家团队，可以帮助您的林业投入获得丰厚回报。无论是管理、搬运或加工，柳工丰富的产品线以及与之配套的各种属具，都能完美满足您的需求。</p>
                    </div>
                    <div class="img">
                      <div class="first_img">
                        <img src="../../../../../yongtong/resources/img/index_industry/content/1.jpg" alt="">
                      </div>
                      <div class="other_img_list">
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/2.jpg" alt="">
                        </div>
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/3.jpg" alt="">
                        </div>
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/4.jpg" alt="">
                        </div>
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/5.png" alt="">
                        </div>
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/6.jpg" alt="">
                        </div>
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/7.jpg" alt="">
                        </div>
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/8.jpg" alt="">
                        </div>
                        <div class="img_item">
                          <img src="../../../../../yongtong/resources/img/index_industry/content/9.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
                <div class="list">
                  <div class="center_wrap">
                    <div class="title">
                      <div class="line"></div>
                      <h3>服务产品</h3>
                    </div>
                    <div class="goods_list">
                      <div class="list_item" v-for="(item,index) in list" :key="index">
                        <a href="">
                          <div class="img">
                            <img :src="item.url" alt="">
                          </div>
                          <div class="item_name">
                            <h5>{{ item.name }}</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `
}
