<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--  vue类引入  -->
    <script src="../../module/js/vue/vue.js"></script>
    <!--  初始化  -->
    <link rel="stylesheet" href="../../styles/base/reset.css" lang="css">
    <!--  样式  -->
    <link rel="stylesheet" href="../../styles/admin/admin_warehouse.css" lang="css">
</head>
<body>
<div id="root_admin_warehouse"></div>
<div class="warehouse_text" id="warehouse_text">
    <div class="center_wrap">
        <form action="" method="post">
            <table class="warehouse_table">
                <tr class="table_title">
                    <th class="list_item">序号</th>
                    <th class="list_item">入库单号</th>
                    <th class="list_item">商品ID</th>
                    <th class="list_item list_item_big">商品名称</th>
                    <th class="list_item">入库价格</th>
                    <th class="list_item">入库数量</th>
                    <th class="list_item list_item_big">入库时间</th>
                    <th class="list_item">操作</th>
                </tr>
                <?php
                //  连接数据库
                $con = mysqli_connect("localhost", "root", "", "yongtong");
                //  中文转码
                mysqli_query($con, 'SET NAMES UTF8');
                if (!$con) {
                    die(mysqli_connect_error());
                }
                $sql = "select * from purchase_view";
                $result = mysqli_query($con, $sql);

                if (isset($_POST["admin_warehouse_btn"])) {
                    $text = $_POST["warehouse_information"];
                    $sql = $sql . " where (goods_name like '%$text%') or (purchase_id like '%$text%') or (goods_id like '%$text%')";
                }

                $result = mysqli_query($con, $sql);
                if (!$result) {
                    die(mysqli_errno($con));
                }

                //  遍历对象
                $order = 1;
                while ($row = mysqli_fetch_row($result)) {
                    $id = $row[0];
                    $name_order = "order" . "$id";
                    $name_id = "id" . "$id";
                    $name_number = "number" . "$id";
                    $name_name = "name" . "$id";
                    $name_price = "price" . "$id";
                    $name_time = "time" . "$id";
                    $name_quantity = "quantity" . "$id";
                    $name_operation = "operation" . "$id";

                    $sql_time = "select purchase_time from purchase_admin where purchase_id='$row[1]'";
                    $result_time = mysqli_query($con, $sql_time);
                    $row_time = mysqli_fetch_row($result_time);
                    $time = "$row_time[0]";
                    if ($row[4] >= 0) {
                        $state = "入库";
                    } else {
                        $state = "出库";
                    }
                    echo "
                     <tr class='table_list'>
                        <td class='list_item'>
                            <input value='$order' type='text' name='$name_order' id='$name_order' class='$name_order' disabled>
                        </td>
                        <td class='list_item'>
                            <input value='$row[1]' type='text' name='$name_number' class='$name_number' id='$name_number' disabled>
                        </td>
                        <td class='list_item'>
                            <input value='$row[2]' type='text' name='$name_id' class='$name_id' id='$name_id' disabled>
                        </td>
                        <td class='list_item list_item_big'>
                            <input value='$row[3]' type='text' name='$name_name' class='$name_name' id='$name_name' disabled>
                        </td>
                        <td class='list_item'>
                            <input value='$row[5]' type='text' name='$name_price' class='$name_price' id='$name_price' disabled>
                        </td>
                         <td class='list_item'>
                            <input value='$row[4]' type='text' name='$name_quantity' class='$name_quantity' id='$name_quantity' disabled>
                        </td>
                        <td class='list_item list_item_big'>
                            <input value='$time' type='text' name='$name_time' class='$name_time' id='$name_time' disabled>
                        </td>
                        <td class='list_item'>
                            <input type='text' value='$state' name='$name_operation' class='$name_operation' id='$name_operation' disabled>
                        </td>
                    </tr>
                ";
                    $order++;
                }
                mysqli_close($con);
                ?>

            </table>
        </form>

    </div>
</div>
</body>
<script type="module" src="../../module/js/admin/admin_warehouse.js"></script>
</html>
