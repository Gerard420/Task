//  goods_content
export let goodsContent = {
    data() {
        return {
            list: [
                {
                    name: 'TC80L4',
                    img: '../../../../../yongtong/resources/img/index_goods/index_goods1.jpg',
                    lang: '8200-265000mm',
                    power: '121kW@2800rpm',
                    weight: '8t',
                    path: '',
                },
              ]
        }
    },
    template: `
           <div class="goodsContent" id="goodsContent">
            <div class="center_wrap">
              <div class="goods_content_list">
                <div class="goods_content_item" v-for="(item,path,index) in list" :key="index">
                  <a href="">
                    <div class="wrap">
                      <div class="wrap_left">
                        <div class="img">
                          <img :src="item.img" alt="">
                        </div>
                        <div class="title">{{item.name}}</div>
                      </div>
                      <div class="wrap_right">
                        <div class="text">
                          <div class="text_title">
                            <p>主臂长：</p>
                            <p>额定功率：</p>
                            <p>最大起重量：</p>
                          </div>
                          <div class="text_word">
                            <p>{{ item.lang }}</p>
                            <p>{{ item.power }}</p>
                            <p>{{ item.weight }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `
}
