//  admin_goods
export let adminGoods = {
    template: `
         <div class="adminGoods" id="adminGoods">
              <div class="goods_header">
                <div class="center_wrap">
                    <h2>管理员系统</h2>
                </div>
            </div>
    <div class="goods_search">
        <div class="center_wrap">
            <div class="search_form">
                <form action="" method="GET">
                    <input type="text" name="goods_information" id="goods_information" class="goods_information"
                           placeholder="请输入商品信息检索商品">
                    <input type="submit" value="检索" name="admin_goods_btn" class="goods_btn">
                </form>
            </div>
        </div>
    </div>
         </div>
        `
}


