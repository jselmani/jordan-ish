const INITIAL_STATE = {
    sections: [
        {
            title: 'Men\'s',
            imageUrl: '../../images/jordan-mens-menu-item.jpg',
            id: 1,
            linkUrl: 'shop/mens'
        },
        {
            title: 'Women\'s',
            imageUrl: '../../images/jordan-womens-menu-item.webp',
            id: 2,
            linkUrl: 'shop/womens'
        },
        {
            title: 'Air Jordan 1',
            imageUrl: '../../images/air-jordan-1-menu-item.jpg',
            id: 3,
            linkUrl: 'shop/air-jordan-1'
        },
        {
            title: 'Basketball',
            imageUrl: '../../images/jordan-basketball-menu-item.webp',
            id: 4,
            linkUrl: 'shop/basketball'
        },
        {
            title: 'SNKRS',
            imageUrl: '../../images/jordan-snkrs-menu-item.webp',
            id: 5,
            linkUrl: 'shop/snkrs'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
