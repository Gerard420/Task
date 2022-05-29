//  home_goods
export let homeGoods = {
    data() {
        return {
            list1: [
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/1.png', url_write: '../../../../../yongtong/resources/img/goods/Write/1.png', list: '1'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/2.png', url_write: '../../../../../yongtong/resources/img/goods/Write/2.png', list: '1'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/3.png', url_write: '../../../../../yongtong/resources/img/goods/Write/3.png', list: '1'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/4.png', url_write: '../../../../../yongtong/resources/img/goods/Write/4.png', list: '1'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/5.png', url_write: '../../../../../yongtong/resources/img/goods/Write/5.png', list: '1'}
            ],
            list2: [
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/6.png', url_write: '../../../../../yongtong/resources/img/goods/Write/6.png', list: '2'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/7.png', url_write: '../../../../../yongtong/resources/img/goods/Write/7.png', list: '2'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/8.png', url_write: '../../../../../yongtong/resources/img/goods/Write/8.png', list: '2'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/9.png', url_write: '../../../../../yongtong/resources/img/goods/Write/9.png', list: '2'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/10.png', url_write: '../../../../../yongtong/resources/img/goods/Write/10.png', list: '2'}
            ],
            list3: [
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/11.png', url_write: '../../../../../yongtong/resources/img/goods/Write/11.png', list: '3'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/12.png', url_write: '../../../../../yongtong/resources/img/goods/Write/12.png', list: '3'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/13.png', url_write: '../../../../../yongtong/resources/img/goods/Write/13.png', list: '3'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/14.png', url_write: '../../../../../yongtong/resources/img/goods/Write/13.png', list: '3'},
                {name: '推土机', url_blue: '../../../../../yongtong/resources/img/goods/Blue/15.png', url_write: '../../../../../yongtong/resources/img/goods/Write/14.png', list: '3'}
            ]
        }
    },
    template: `
         <div class="homeGoods" id="homeGoods">
            <div class="center_wrap">
              <div class="title">
                <div class="line"></div>
                <h3>服务产品</h3>
               </div>
              <div class="goods_list">
                <div class="goods_item" v-for="(item,index) in list1" :key="index">
                  <a href="#">
                    <div class="goods_img">
                      <img :src="item.url_blue" class="blue">
                      <img :src="item.url_write" class="write">
                    </div>
                    <div class="goods_text">
                      <h4>{{ item.name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div class="goods_list">
                <div class="goods_item" v-for="(item,index) in list2" :key="index">
                  <a href="#">
                    <div class="goods_img">
                      <img :src="item.url_blue" class="blue">
                      <img :src="item.url_write" class="write">
                    </div>
                    <div class="goods_text">
                      <h4>{{ item.name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div class="goods_list">
                <div class="goods_item" v-for="(item,index) in list3" :key="index">
                  <a href="#">
                    <div class="goods_img">
                      <img :src="item.url_blue" class="blue">
                      <img :src="item.url_write" class="write">
                    </div>
                    <div class="goods_text">
                      <h4>{{ item.name }}</h4>
                    </div>
                  </a>
                </div>
              </div>
        
            </div>
        </div>  
        `
}
