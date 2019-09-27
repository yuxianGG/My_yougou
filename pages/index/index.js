
// 首页

Page({
    data:{
        //轮播图数组
        swiperList:[]
    },

    onLoad(){
        this.getSwiperData()
    },

    //获取轮播图数据
    getSwiperData(){
        wx.request({
            url:'https://api.zbztb.cn/api/public/v1/home/swiperdata',
            success:(result) =>{
                this.setData({
                    swiperList:result.data.message
                })
            }
        })
    }
})
