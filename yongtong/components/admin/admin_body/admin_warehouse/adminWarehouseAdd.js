//  admin_warehouse_add
export let adminWarehouseAdd = {
    template: `
        <div class="adminWarehouseAdd" id="adminWarehouseAdd">
       <div class="warehouse_header">
            <div class="center_wrap">
                <h2>管理员系统</h2>
            </div>
        </div>

        <div class="warehouse_text">
            <div class="center_wrap">
                <form action="" method="post">
<!--                    <div class="warehouse_url list_item">-->
<!--                        <span>商品ID</span><input value="" name="id" class="id" id="id">-->
<!--                    </div>-->
                    <div class="warehouse_name list_item">
                        <span>商品名称</span><input value="" name="name" class="name" id="name">
                    </div>
                    <div class="goods_price list_item">
                        <span>入库价格</span><input value="" name="price" class="price" id="price" placeholder="只需要输入金额不需要输入单位或前缀">
                    </div>
                     <div class="goods_price list_item">
                        <span>入库数量</span><input value="" name="number" class="number" id="number">
                    </div>
                    <div class="list_item list_btn warehouse_add">
                        <input type="submit" value="提交" name="btn_add">
                    </div>
                </form>

            </div>
        </div>

    </div>
        `
}
