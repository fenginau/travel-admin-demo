import { random, lorem } from 'faker/locale/zh_CN.js';

import { randomFloat, weightedBoolean } from './utils';

export default db => {
    let id = 0;
    let products = ['北欧极光之旅', '东欧十日游', '日本樱花游', '伦敦深度游', '墨尔本-堪培拉悉尼四天巴士团', '蒸汽火车+企鹅岛一日游', '蒸汽火车+酒庄一日游', '大洋路特价一日游', '塔州紫色经典4日'];
    return [{
        id: 0,
        category_id: 1,
        reference: '北欧极光之旅',
        width: 16,
        height: 20,
        price: 12000,
        thumbnail: require('../../demo/src/assets/images/a6.jpg'),
        image: require('../../demo/src/assets/images/a6.jpg'),
        description: '<p><span style="font-size:28px;"><strong>行程介绍</strong></span></p><p><span style="font-size:26px;">第 1 天</span></p><p style="color:#6ebfe9;font-family:Montserrat-SemiBold;font-size:20px;">墨尔本Melbourne -哥本哈根Copenhagen</p><p>参考航班：EK407 墨尔本22:30－迪拜次日05:30</p><p>EK151 迪拜08:20－哥本哈根12:20</p><p>由墨尔本搭乘国际航班前往丹麦首都哥本哈根，抵达后午餐，休闲半日游，游览：大理石教堂，皇宫广场，新港酒吧街，入住酒店休息，调整时差。</p><p>住: 四星酒店 餐: 午 、晚</p><p><span style="font-size:28px;"><strong><img alt="" src="https://evetigertravel.files.wordpress.com/2016/02/img_4843.jpg" style="width: 100%; height: auto;" /></strong></span></p><p><span style="font-size:26px;">第 2 天</span></p><p>同上</p><p><img alt="" src="https://travelguide.michelin.com/sites/default/files/styles/poi_slideshow/public/images/travel_guide/voyage_media-NX-33085/marmorkirken-marble-church.jpg" style="width: 100%; height: auto;" /></p><p><span style="font-size:26px;">第 3 天</span></p><p style="color:#6ebfe9;font-family:Montserrat-SemiBold;font-size:20px;">哥本哈根Copenhagen -卑尔根Bergen</p><p>早餐后参观：美人鱼雕像，神农喷泉，市政厅广场，安徒生铜像，阿美琳堡宫（*）晚上搭乘航班前往卑尔根.</p><p>参考航班：SK2870 哥本哈根21:00－卑尔根22:25</p><p>住: 四星酒店 餐: 早、午 、晚</p><p><img alt="" src="https://www.atlasandboots.com/wp-content/uploads/2017/01/Things-to-do-in-Bergen-Norway-Bryggen-1.jpg" style="width: 100%; height: auto;" /></p><p><span style="font-size:26px;">第 4 天</span></p><p style="color:#6ebfe9;font-family:Montserrat-SemiBold;font-size:20px;">卑尔根Bergen</p><p>卑尔根意为&ldquo;山中牧场&rdquo;，是挪威第二大城市，航运和商业中心。游览：十七世纪汉莎商人居所&mdash;世界文化遗产布里根，搭乘卑尔根上山缆车（*）登上弗罗依恩山俯瞰卑尔根全景，后参观渔货市场、以及具有北欧特色的老城区。夜宿卑尔根。</p><p>住: 四星酒店 餐: 早 (午餐自理） 晚</p><p><img alt="" src="https://www.atlasandboots.com/wp-content/uploads/2017/01/Things-to-do-in-Bergen-Norway-Floyen.jpg" style="width: 100%; height: auto;" /></p><p><span style="font-size:26px;">第 5 天</span></p><p style="color:#6ebfe9;font-family:Montserrat-SemiBold;font-size:20px;">卑尔根Bergen-奥斯陆Oslo - 特罗姆瑟Tromso</p><p>一团参考航班:SK244 卑尔根07:10-奥斯陆08:05</p><p>二团参考航班: SK236 卑尔根06:10-奥斯陆07:00</p><p>早餐后游览：参观维尔兰雕像公园中栩栩如生的青铜与花岗岩人像雕像作品。参观举办过冬奥会的贺美考伦滑雪跳台（外观），从未被攻克过的奥斯路阿克胡斯城堡（*），颁发诺贝尔和平奖的市政厅，卡尔约翰大街,晚上飞往特罗姆瑟。</p><p>一团参考航班:SK4432 奥斯陆19:00－特罗姆瑟20:50</p><p>二团参考航班:SK4434 奥斯陆19:55－特罗姆瑟21:50</p><p>住: 四星酒店 餐: 早、午 (晚餐自理）</p><p><img alt="" src="https://d19lgisewk9l6l.cloudfront.net/assetbank/Northern_Lights_Villmarkssenter_Tromso_39906.jpg" style="width: 100%; height: auto;" /></p><p>&nbsp;</p>',
        stock: '5%',
    },
    {
        id: 1,
        category_id: 1,
        reference: '东欧十日游',
        width: 10,
        height: 20,
        price: 11000,
        thumbnail: require('../../demo/src/assets/images/do.jpg'),
        image: require('../../demo/src/assets/images/do.jpg'),
        description: '东欧5国12日游 Day 01 /2015-10-01 行程：立陶宛维尔纽斯机场出发-华沙 #波航LO776 18:55-19:00 (1H5M) 入住：华沙汉普顿希尔顿酒店 (Hampton by Hilton) 💕坐着焦虑司机师傅的出租车火速赶往机场，号称10分钟的路程走了25分钟，好在之前就留出了富裕，这个故事教育我们：早起三光，晚起三慌！ 维尔纽斯机场不大，国内出发有点儿北京西客站的感觉！人很少，安检很严，所有的水都被扣下了！ 飞机好小，体会到抗战电视剧中蒋介石从专机上下来的感觉，走五六节台阶就登机了！空乘先送来了收费吃食，然后才发放免费的！精明！好在有漫天的晚霞相伴，低头已看见波兰美丽的夜。💕 PS: 1.在机场与北京出发的朋友顺利会师！ 2. 当日入住酒店的床是我们计塔林以来最大的！',
        stock: '5%',
    },
    {
        id: 2,
        category_id: 1,
        reference: '日本樱花游',
        width: 6,
        height: 20,
        price: 5000,
        thumbnail: require('../../demo/src/assets/images/sakura.jpg'),
        image: require('../../demo/src/assets/images/sakura.jpg'),
        description: '可同样是去日本，同样是看樱花，有的人拍了几张照就美滋滋地回来啦。有的人却在一朵樱花上，看出了一花一世界，看出了流水落花春去也，看出了人面樱花相映红，看出了樱桃厅院春偏好，石井栏堂夜更幽......',
        stock: '5%',
    },
    {
        id: 3,
        category_id: 1,
        reference: '伦敦深度游',
        width: 16,
        height: 20,
        price: 16000,
        thumbnail: require('../../demo/src/assets/images/ld.jpg'),
        image: require('../../demo/src/assets/images/ld.jpg'),
        description: '在伦敦旅行不是一个你可以两天搞定的地方。伦敦需要你慢下来，需要你花一周甚至更长的时间，生活其中。只有生活在其中，你才能领略到那句“如果你厌倦了伦敦，你就厌倦了生活”，究竟是什么意思。它的意思是，你永远不会，厌倦伦敦——',
        stock: '5%',
    },
    {
        id: 4,
        category_id: 3,
        reference: '墨尔本-堪培拉悉尼四天巴士团',
        width: 4,
        height: 20,
        price: 1000,
        thumbnail: require('../../demo/src/assets/images/xn.png'),
        image: require('../../demo/src/assets/images/xn.png'),
        description: '早上乘坐舒适大巴从墨尔本出发(8:30CITY)前往堪培拉。途中经过美丽的花园小镇阿尔伯里，这里繁茂葱郁的河谷中生长着有数百年历史的桉树，也栖息着各种野生动物，运气好的话，您也许能看见可爱的野生袋鼠！我们将在傍晚抵达堪培拉，可于酒店自费晚餐，之后入住酒店休息。',
        stock: '5%',
    },
    {
        id: 5,
        category_id: 2,
        reference: '蒸汽火车+企鹅岛一日游',
        width: 1,
        height: 20,
        price: 100,
        thumbnail: require('../../demo/src/assets/images/qe.png'),
        image: require('../../demo/src/assets/images/qe.png'),
        description: '中午在墨尔本市区出发,我们的旅游巴士先带领大家前往蒸汽小火车的上车站台。听到呜呜的鸣响后,古老的蒸汽火车将会与您一起穿梭于丹尼农山的丛林之中。帕芬.比利蒸汽小火车是澳大利亚历史最古老的蒸汽火车之一。最初的帕芬比利铁路建于20世纪初用于货物运输,在1975年被正式改为观光游览列车,铁路全长29公里。',
        stock: '5%',
    },
    {
        id: 6,
        category_id: 2,
        reference: '蒸汽火车+酒庄一日游',
        width: 1,
        height: 20,
        price: 100,
        thumbnail: require('../../demo/src/assets/images/zq.jpg'),
        image: require('../../demo/src/assets/images/zq.jpg'),
        description: '体验澳大利亚的历史和自然生态,这天的行程将会是您最佳的选择。早上8:30am我们从市区出发，首先前往十分热门的旅游地点 - Brighton beach 布莱顿彩虹小屋。其鲜艳的外型及简单的木质架构，反映了当地人享受海边及淋浴的价值观。之后我们的旅游巴士先带领大家前往蒸汽小火车的上车站台,听到呜呜的鸣响后,古老的蒸汽火车将会与您一起穿梭于丹尼农山的丛林之中。',
        stock: '5%',
    },
    {
        id: 7,
        category_id: 2,
        reference: '大洋路特价一日游',
        width: 1,
        height: 20,
        price: 80,
        thumbnail: require('../../demo/src/assets/images/dyl.jpg'),
        image: require('../../demo/src/assets/images/dyl.jpg'),
        description: '沿海而建的公路，这世上有许多条，但没有一条能与墨尔本附近的大洋路相比。长城大洋路特价经典一日游将壮观的海岸线，狂野奇妙的雨林，神奇可爱的野生动物以及淳朴悠闲的当地文化完美地结合。来一趟大洋路，您收获的将是无可比拟的多重旅游体验。',
        stock: '5%',
    },
    {
        id: 8,
        category_id: 4,
        reference: '塔州紫色经典4日',
        width: 4,
        height: 20,
        price: 600,
        thumbnail: require('../../demo/src/assets/images/ts.png'),
        image: require('../../demo/src/assets/images/ts.png'),
        description: '( 建议乘坐10:00 前到达朗塞斯顿航班) 接机过后，前往卡德奈特峡谷(Cataract Gorge), 可自费乘坐全球最长的单轨索道，居高临下地欣赏自然峡谷的地貌和绿树林荫的湖光山色。稍后前往风景秀丽的瑞士文化村。前往南半球最大的* 薰衣草庄园( 自费)，此地是塔斯马尼亚唯一的原生薰衣草精油生产商，也是全球最大的私人薰衣草培植农庄。可在此选购各种薰衣草产品包括风靡全球的薰衣草小熊，或自费品尝芳香浓郁的薰衣草冰淇淋。',
        stock: '5%',
    }];
    
    // return db.categories.reduce(
    //     (acc, category) => [
    //         ...acc,
    //         ...Array.from(Array(10).keys()).map(index => {
    //             const width = randomFloat(10, 40);
    //             const height = randomFloat(10, 40);

    //             return {
    //                 id: id++,
    //                 category_id: category.id,
    //                 reference: products[Math.floor(Math.random() * products.length)],
    //                 // reference:
    //                 //     category.name.substr(0, 2) +
    //                 //     '-' +
    //                 //     random.alphaNumeric(5) +
    //                 //     '-' +
    //                 //     random.arrayElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    //                 width: width,
    //                 height: height,
    //                 price: random.number(
    //                     (width * height)
    //                 ),
    //                 thumbnail:
    //                     'https://marmelab.com/posters/' +
    //                     category.name +
    //                     '-' +
    //                     (index + 1) +
    //                     '.jpeg',
    //                 image:
    //                     'https://marmelab.com/posters/' +
    //                     category.name +
    //                     '-' +
    //                     (index + 1) +
    //                     '.jpeg',
    //                 description: lorem.paragraph(),
    //                 stock: weightedBoolean(20)
    //                     ? 0
    //                     : random.number({ min: 0, max: 250 }),
    //             };
    //         }),
    //     ],
    //     []
    // );
};
