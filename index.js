const {
  sequelize,
  Shop_Product,
  Shop,
  ShopName,
  ShopType,
  ShopAddress,
  Product,
  ProductType,
  ProductClass,
  ProductList,
} = require("./db/models");

async function responseDB(shop_id, categ) {
  const shopFullName = shop_id.split(",");
  if (shopFullName.length !== 3) {
    console.log("не верный формат адреса");
    return;
  }
  try {
    let shop = await Shop.findAll({
      attributes: ["id"],
      raw: true,
      include: [
        {
          model: ShopName,
          raw: true,
          attributes: ["name"],
          where: { name: shopFullName[0] },
        },
        {
          model: ShopType,
          raw: true,
          attributes: ["type"],
          where: { type: shopFullName[1] },
        },
        {
          model: ShopAddress,
          raw: true,
          attributes: ["address"],
          where: { address: shopFullName[2] },
        },
      ],
    });
    if (!shop) console.log("по вашему запросу данных не найдено");
    else {
      console.log("продолжаем");
    
    console.log(shop[0].id);
    let category = await ProductType.findAll({
      attributes: ["type"],
      raw: true,
      where: { type: categ },
      include: [
        { model: ProductClass, raw: true, attributes: ["name"] },
        { model: ProductList, raw: true, attributes: ["name"] },
      ],
    });

    console.log(shop);
    console.log(category);
  }
  } catch (err) {
    console.log(err);
  }
}

responseDB("Перекресток,Гиппер,address2", "Газировка");
