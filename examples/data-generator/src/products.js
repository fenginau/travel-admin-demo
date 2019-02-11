import { random, lorem } from 'faker/locale/zh_CN.js';

import { randomFloat, weightedBoolean } from './utils';

export default db => {
    let id = 0;
    let products = ['北欧极光之旅', '东欧十日游', '日本樱花游', '伦敦深度游', '墨尔本-堪培拉悉尼四天巴士团', '蒸汽火车+企鹅岛一日游', '蒸汽火车+酒庄一日游', '大洋路特价一日游', '塔州紫色经典4日'];
    return db.categories.reduce(
        (acc, category) => [
            ...acc,
            ...Array.from(Array(10).keys()).map(index => {
                const width = randomFloat(10, 40);
                const height = randomFloat(10, 40);

                return {
                    id: id++,
                    category_id: category.id,
                    reference: products[Math.floor(Math.random() * products.length)],
                    // reference:
                    //     category.name.substr(0, 2) +
                    //     '-' +
                    //     random.alphaNumeric(5) +
                    //     '-' +
                    //     random.arrayElement('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                    width: width,
                    height: height,
                    price: random.number(
                        (width * height)
                    ),
                    thumbnail:
                        'https://marmelab.com/posters/' +
                        category.name +
                        '-' +
                        (index + 1) +
                        '.jpeg',
                    image:
                        'https://marmelab.com/posters/' +
                        category.name +
                        '-' +
                        (index + 1) +
                        '.jpeg',
                    description: lorem.paragraph(),
                    stock: weightedBoolean(20)
                        ? 0
                        : random.number({ min: 0, max: 250 }),
                };
            }),
        ],
        []
    );
};
