//  admin_goods_add
export let adminGoodsAdd = {
    template: `
         <div class="adminGoodsAdd" id="adminGoodsAdd">
        <div class="goods_header">
            <div class="center_wrap">
                <h2>管理员系统</h2>
            </div>
        </div>
        <div class="goods_text">
            <div class="center_wrap">
                <form action="" method="post">
                    <div class="goods_name list_item">
                        <span>商品名称</span><input name="name" class="name" id="name">
                    </div>
                    <div class="goods_price list_item">
                        <span>商品价格</span><input name="price" class="price" id="price">
                    </div>
                    <div class="goods_url list_item">
                        <span>图片链接</span><input name="img_url" class="img_url" id="img_url">
                    </div>
                    <div class="warning_item" id="warning_item"></div>
                    <div class="list_item list_btn goods_add">
                        <input type="submit" value="添加" name="btn_add">
                    </div>
                </form>

            </div>
        </div>
    </div>
        `
}
