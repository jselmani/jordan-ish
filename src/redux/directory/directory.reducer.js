const INITIAL_STATE = {
  sections: [
    {
      title: "Mens",
      imageUrl:
        "https://static.nike.com/a/images/f_auto/dpr_1.0/h_700,c_limit/deeac6ea-6328-4c1a-a583-9656c45be3e6/jordan-basketball.jpg",
      id: 1,
      linkUrl: "shop/mens",
    },
    {
      title: "Womens",
      imageUrl:
        "https://static.nike.com/a/images/f_auto/dpr_1.0/w_578,c_limit/90fe2a68-8d46-4d7b-ae78-a022efb637b2/jordan-basketball.jpg",
      id: 2,
      linkUrl: "shop/womens",
    },
    {
      title: "Air Jordan 1",
      imageUrl:
        "https://static.nike.com/a/images/s1g9erefnenxnut4rnby/aji-photoshoot.jpg",
      id: 3,
      linkUrl: "shop/air-jordan-1",
    },
    {
      title: "Basketball",
      imageUrl:
        "https://imgix.bustle.com/uploads/image/2021/4/20/fb3d5f4b-e851-421c-b047-4c6c6a7372b9-nikenews_jordanbrand_zionwilliamson_zion1_07_original.jpg?w=757&h=607&fit=crop&crop=faces&auto=format%2Ccompress",
      id: 4,
      linkUrl: "shop/basketball",
    },
    {
      title: "SNKRS",
      imageUrl:
        "https://static.nike.com/a/images/w_960,c_limit,f_auto/v207qztgzqp2a5bwxvru/air-jordan-3-retro-og-white-cement-grey-blue.jpg",
      id: 5,
      linkUrl: "shop/snkrs",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
