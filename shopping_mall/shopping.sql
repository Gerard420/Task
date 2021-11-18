-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2021-06-07 06:24:04
-- 服务器版本： 8.0.21
-- PHP 版本： 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `shopping`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

DROP TABLE IF EXISTS `goods`;
CREATE TABLE IF NOT EXISTS `goods` (
  `goodsid` int NOT NULL AUTO_INCREMENT,
  `goodsname` varchar(200) NOT NULL,
  `goodsprice` varchar(50) NOT NULL,
  `sex` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `images` varchar(500) NOT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=InnoDB AUTO_INCREMENT=1000112 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`goodsid`, `goodsname`, `goodsprice`, `sex`, `images`) VALUES
(1000001, 'adidas 秋冬潮流外套', '499', '男', './img/goods/16176901506058093.jpeg'),
(1000002, 'ULTRABOOST 21 PRIMEBLUE 低帮跑步运动鞋', '1499', '男', './img/goods/1.jpg'),
(1000003, 'ULTRABOOST MADE TO BE REMADE 低帮跑步运动鞋', '1399', '男', './img/goods/2.jpg'),
(1000004, 'SUPERSTAR 低帮经典运动鞋', '999', '女', './img/goods/2.jpg'),
(1000005, 'SUPERSTAR 低帮经典运动鞋', '799', '男', './img/goods/4.jpg'),
(1000006, 'OZWEEGO CELOX 低帮经典运动鞋', '999', '男', './img/goods/6.jpg'),
(1000007, 'STAN SMITH 低帮经典运动鞋', '1299', '女', './img/goods/7.jpg'),
(1000008, 'ZX 2K BOOST PURE 低帮经典运动鞋', '599', '男', './img/goods/8.jpg'),
(1000009, 'NIZZA RF 低帮经典运动鞋', '1999', '女', './img/goods/9.jpg'),
(1000010, 'NIZZA HI RF 高帮经典运动鞋', '999', '男', './img/goods/10.jpg'),
(1000011, 'DAY JOGGER 低帮经典运动鞋', '899', '女', './img/goods/11.jpg'),
(1000012, 'DAY JOGGER 低帮经典运动鞋', '2199', '男', './img/goods/12.jpg'),
(1000013, 'COUNTRY HM 经典低帮运动鞋', '2399', '男', './img/goods/13.jpg'),
(1000014, 'FORUM L HM 经典低帮运动鞋', '1299', '女', './img/goods/14.jpg'),
(1000015, 'ZX 1000 SIMPSONS FLAMING MOES 低帮经典运动鞋', '1499', '男', './img/goods/15.jpg'),
(1000016, 'FORUM 84 LOW SIMPSONS DUFF 低帮经典运动鞋', '999', '男', './img/goods/16.jpg'),
(1000017, 'SUPERSTAR SIMPSONS SQUISHEE 低帮经典运动鞋', '2199', '男', './img/goods/17.jpg'),
(1000018, 'ZX 0000 低帮经典运动鞋', '1599', '男', './img/goods/18.jpg'),
(1000019, 'TYPE O-6 低帮经典运动鞋', '1299', '男', './img/goods/19.jpg'),
(1000020, '032 GSG TR 中帮经典运动鞋', '1999', '男', './img/goods/20.jpg'),
(1000021, 'adidas neo U PD TEE2 夏季运动短袖T恤', '269', '男', './img/goods/21.jpg'),
(1000022, 'LOVE UNITES AOP 夏季运动短袖T恤', '299', '男', './img/goods/22.jpg'),
(1000023, 'CROP TEE 夏季运动短袖T恤', '309', '女', './img/goods/23.jpg'),
(1000024, 'TEE 夏季运动短袖T恤', '249', '女', './img/goods/24.jpg'),
(1000025, 'COTTON TEE 运动短袖T恤', '699', '女', './img/goods/25.jpg'),
(1000026, 'W 3S CRO T 夏季短袖T恤', '199', '女', './img/goods/26.jpg'),
(1000027, 'MARIMEKKO TEE W 新款夏季跑步运动短袖T恤', '299', '女', './img/goods/28.jpg'),
(1000028, 'U PRD BOS G T 夏季短袖T恤', '399', '男', './img/goods/27.jpg'),
(1000029, 'W BADGE WV TOP 夏季户外短袖T恤', '299', '男', './img/goods/29.jpg'),
(1000030, 'CROP TOP 夏季运动短袖T恤', '549', '女', './img/goods/30.jpg'),
(1000031, 'adidas neo W LOGO TEE 1 夏季运动短袖T恤', '269', '女', './img/goods/31.jpg'),
(1000032, 'GRAPHIC TEE UNI 夏季圆领短袖T恤', '399', '男', './img/goods/32.jpg'),
(1000033, 'TEE 夏季运动短袖T恤', '399', '男', './img/goods/33.jpg'),
(1000034, 'LOOSE TEE 夏季运动短袖T恤', '359', '女', './img/goods/34.jpg'),
(1000035, 'C SHORT FT 夏季运动短裤', '249', '男', './img/goods/36.jpg'),
(1000036, 'LOVE UNITES BLO 夏季运动短裤', '369', '男', './img/goods/35.jpg'),
(1000037, 'JUVE SHO 尤文图斯夏季足球运动短裤', '499', '男', './img/goods/37.jpg'),
(1000038, 'adidas neo BRAVADA MID 低帮休闲运动鞋', '999', '男', './img/goods/38.jpg'),
(1000039, 'LEGO CR AOP 3PP 乐高联名运动袜子', '569', '女', './img/goods/39.jpg'),
(1000040, 'D Rose 4 Restomod 篮球运动鞋', '369', '女', './img/goods/40.jpg'),
(1000041, 'SPW EgleGFX T-D 春季运动裙装', '349', '女', './img/goods/41.jpg'),
(1000042, 'FI PT WV 春季运动裤装', '699', '男', './img/goods/42.jpg'),
(1000043, 'Egle GFX Tank 春季运动背心', '349', '女', './img/goods/43.jpg'),
(1000044, 'X GHOSTED.1 AG 软人造草坪足球运动鞋', '999', '女', './img/goods/44.jpg'),
(1000045, 'SPW NiniGFX CRW 春季运动卫衣', '369', '女', './img/goods/45.jpg'),
(1000046, 'ULTRABOOST 1.0 DNA 低帮跑步运动鞋', '999', '男', './img/goods/46.jpg'),
(1000047, 'OZWEEGO CELOX 低帮经典运动鞋', '699', '女', './img/goods/47.jpg'),
(1000048, 'adidas neo KOLLIDE 低帮休闲运动鞋', '999', '女', './img/goods/48.jpg'),
(1000049, 'PREDATOR FREAK .3 L MG 软人造草坪硬人造草坪足球运动鞋', '369', '男', './img/goods/49.jpg'),
(1000050, 'TERREX FREE HIKER PARLEY MK W 户外运动鞋', '499', '女', './img/goods/50.jpg'),
(1000051, 'W AeKn Snp Pnt 春季运动裤装', '389', '男', './img/goods/51.jpg'),
(1000052, 'CLIMACOOL VENTO 低帮跑步运动鞋', '799', '女', './img/goods/52.jpg'),
(1000053, 'OZWEEGO CELOX 低帮经典运动鞋', '699', '女', './img/goods/53.jpg'),
(1000054, 'D Rose 5 Restomod 篮球运动鞋', '349', '女', './img/goods/54.jpg'),
(1000055, 'WB AOP W 春季运动夹克外套', '369', '女', './img/goods/55.jpg'),
(1000056, 'ZX 2K BOOST PURE 低帮经典运动鞋', '599', '男', './img/goods/56.jpg'),
(1000057, 'NIZZA RF 低帮经典运动鞋', '1999', '女', './img/goods/57.jpg'),
(1000058, 'NIZZA HI RF 高帮经典运动鞋', '999', '男', './img/goods/58.jpg'),
(1000059, 'DAY JOGGER 低帮经典运动鞋', '899', '女', './img/goods/59.jpg'),
(1000060, 'FORUM L HM 经典低帮运动鞋', '1299', '女', './img/goods/60.jpg'),
(1000061, 'LOVE UNITES AOP 夏季运动短袖T恤', '299', '男', './img/goods/61.jpg'),
(1000062, 'CROP TEE 夏季运动短袖T恤', '309', '女', './img/goods/62.jpg'),
(1000063, 'TEE 夏季运动短袖T恤', '249', '女', './img/goods/63.jpg'),
(1000064, 'W 3S CRO T 夏季短袖T恤', '199', '女', './img/goods/64.jpg'),
(1000065, 'CLIMACOOL VENTO 低帮跑步运动鞋', '399', '女', './img/goods/65.jpg'),
(1000066, 'PREDATOR FREAK .3 TF 硬人造草坪足球运动鞋', '499', '男', './img/goods/66.jpg'),
(1000067, 'CARDIGAN 运动针织衫', '389', '男', './img/goods/67.jpg'),
(1000068, 'PREDATOR FREAK .3 L MG 软人造草坪硬人造草坪足球运动鞋', '499', '男', './img/goods/68.jpg'),
(1000069, 'TERREX AGRAVIC TR W 户外运动鞋', '369', '女', './img/goods/69.jpg'),
(1000070, 'STR PT KNIT 春季运动裤装', '499', '男', './img/goods/70.jpg'),
(1000071, 'PREDATOR FREAK .3 L MG 软人造草坪硬人造草坪足球运动鞋', '699', '女', './img/goods/71.jpg'),
(1000072, 'ULTRABOOST 1.0 DNA 低帮跑步运动鞋', '499', '女', './img/goods/72.jpg'),
(1000073, 'NINI GFX PANT 春季运动裤装', '369', '女', './img/goods/73.jpg'),
(1000074, 'CLIMACOOL VENTO 低帮跑步运动鞋', '399', '男', './img/goods/74.jpg'),
(1000075, 'BLOUSON 运动长袖衬衫', '399', '女', './img/goods/75.jpg'),
(1000076, 'PREDATOR FREAK .3 TF 硬人造草坪足球运动鞋', '699', '男', './img/goods/76.jpg'),
(1000077, 'aSMC ClimaCool VENTO 低帮运动鞋', '1999', '女', './img/goods/77.jpg'),
(1000078, 'TERREX VOYAGER 21 W 低帮户外运动鞋', '1999', '女', './img/goods/78.jpg'),
(1000079, 'TRACK TOP 夹克外套', '389', '男', './img/goods/79.jpg'),
(1000080, 'TMAC 2 Restomod 篮球中帮运动鞋', '1999', '女', './img/goods/80.jpg'),
(1000081, 'W E 3S SLIM TEE 短袖T恤', '699', '男', './img/goods/81.jpg'),
(1000082, 'TERREX DAROGA TWO 13 BLUE 低帮户外运动鞋', '1999', '女', './img/goods/82.jpg'),
(1000083, 'TERREX VOYAGER SLEEK H.RDY 户外运动鞋', '369', '女', './img/goods/83.jpg'),
(1000084, 'aSMC Treino 运动鞋', '1999', '男', './img/goods/84.jpg'),
(1000085, 'X GHOSTED+ FG 硬天然草坪足球运动鞋', '389', '男', './img/goods/85.jpg'),
(1000086, 'SHORT 夏季运动短裤', ' 299', '男', './img/goods/86.jpg'),
(1000087, 'UltraBOOST X 3.D. S. 跑步鞋', '1299', '女', './img/goods/87.jpg'),
(1000088, 'Harden Vol. 5 Futurenatural 篮球运动鞋', '299', '女', './img/goods/88.jpg'),
(1000089, 'CLIMACOOL VENTO 低帮跑步运动鞋', '1299', '男', './img/goods/89.jpg'),
(1000090, 'LOVE UNITES BLO 夏季运动短裤', '369', '男', './img/goods/90.jpg'),
(1000091, 'Dame 7 GCA 篮球运动鞋', '299', '女', './img/goods/91.jpg'),
(1000092, 'TERREX DAROGA TWO 13 H.RDY 户外运动鞋', '1299', '女', './img/goods/92.jpg'),
(1000093, 'X GHOSTED+ FG 硬天然草坪足球运动鞋', '1999', '男', './img/goods/93.jpg'),
(1000094, 'SWEAT SHORT 运动短裤', '369', '女', './img/goods/94.jpg'),
(1000095, 'TERREX SUMRA W 夏季户外运动凉鞋拖鞋', '699', '男', './img/goods/95.jpg'),
(1000096, 'MARIMEKKO 2IN1 新款夏季跑步运动短裤', '369', '男', './img/goods/96.jpg'),
(1000097, 'D.O.N. Issue 2 GCA 低帮篮球运动鞋', '1299', '女', './img/goods/97.jpg'),
(1000098, '户外多功能徒步越野鞋', '889', '男', './img/goods/98.jpg'),
(1000099, 'D Rose 4 Restomod 篮球运动鞋', '899', '女', './img/goods/99.jpg'),
(1000100, 'SWEATSHIRT UNI 春秋卫衣', '389', '男', './img/goods/100.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `userid` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userpassword` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`userid`, `userpassword`) VALUES
('13342228890', 'wch314965927'),
('13024093210', 'wch314965927'),
('14032020000', 'weiisdsdhschc'),
('13222222222', 'wwdwdwdwwdwd'),
('14040404444', 'wurjshsjdsx'),
('11111111111', '2222222'),
('22222222222', 'wwwdwdwdwd'),
('22344444444', 'weddsdss'),
('10222222222', 'wedsdsdsdad'),
('root', 'root'),
('13400000000', 'wewewe');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
