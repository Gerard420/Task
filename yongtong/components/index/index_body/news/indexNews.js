//  index_news
export let indexNews = {
    data() {
        return {
            list: [
                {
                    title: '开工大吉|踔厉奋发启新程 众虎同心开门红',
                    date: '2022/02/15',
                    word: '2月3日大年初三，年味正浓，柳工人已整装上阵，奔赴各自岗位，吹响新年奋进号角。',
                    img_url: '../../../../../yongtong/resources/img/index_news/new1.jpg',
                    path: ''
                },


            ]
        }
    },
    template: `
         <div class="indexNews" id="indexNews">
            <div class="center_wrap">
              <div class="news_list">
                <div class="news_item" v-for="(item,index) in list" :key="index">
                  <a href="#">
                    <div class="news_img">
                      <img :src="item.img_url" alt="">
                    </div>
                    <div class="news_text">
                      <h4>{{ item.title }}</h4>
                      <h5>{{ item.date }}</h5>
                      <p>{{ item.word }}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `
}
