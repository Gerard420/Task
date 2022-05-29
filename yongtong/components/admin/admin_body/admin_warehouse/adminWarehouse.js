//  admin_warehouse
export let adminWarehouse = {
    template: `
        <div class="adminWarehouse" id="adminWarehouse">
        <div class="warehouse_header">
            <div class="center_wrap">
                <h2>管理员系统</h2>
            </div>
        </div>
        <div class="warehouse_search">
            <div class="center_wrap">
                <div class="search_form">
                    <form action="" method="post">
                        <input type="text" name="warehouse_information" id="warehouse_information"
                               class="warehouse_information"
                               placeholder="请输入商品信息检索入库信息">
                        <input type="submit" value="检索" name="admin_warehouse_btn" class="warehouse_btn">
                    </form>
                </div>
            </div>
        </div>

    </div>
        `
}
