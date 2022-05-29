//  admin_nav
export let adminNav = {
    data() {
        return {
            nav_list: [
                {title: '出入库信息管理', path: '../../../../yongtong/views/admin/admin_warehouse.php',},
                {title: '商品出入库', path: '../../../../yongtong/views/admin/admin_warehouse_add.php'},
                {title: '商城管理', path: '../../../../yongtong/views/admin/admin_goods.php'},
                {title: '商品上架', path: '../../../../yongtong/views/admin/admin_goods_add.php'},
            ]
        }
    },
    template: `
         <div class="adminNav" id="adminNav">
            <div class="nav_list">
                <div class="nav_item">
                    <div class="nav_img">
                    <a href="../../../../yongtong/views/index/index.php">
                        <img src="../../../../yongtong/resources/img/logo/logo_small_white.png" alt="">
                     </a>
                    </div>
                </div>
                <div class="nav_item" v-for="(item,index) in nav_list" :key="index">
                    <a :href="item.path">
                        <div class="nav_title">
                            <h3>{{item.title}}</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `
}
