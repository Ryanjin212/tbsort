var rule = {
    title:'Madouclub',
    host:'https://madou.club',
	searchUrl:'/?s=**',
    url:'/category/fyclass/page/fypage',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'麻豆传媒&麻豆番外篇&麻豆花絮&hongkongdoll&psychoporntw&果冻传媒&天美传媒&皇家华人&兔子先生',//静态分类名称拼接
    class_url:'%e9%ba%bb%e8%b1%86%e4%bc%a0%e5%aa%92;&%e9%ba%bb%e8%b1%86%e7%95%aa%e5%a4%96%e7%af%87;&%e9%ba%bb%e8%b1%86%e8%8a%b1%e7%b5%ae;&hongkongdoll&psychoporntw&果冻传媒&天美传媒&皇家华人&兔子先生',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.excerpts div&&a;h2&&text;.excerpt.excerpt-c5&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
	搜索:'.grid.grid-cols-2 div&&a;.lozad.w-full&&alt;.lozad.w-full&&data-src;.absolute.bottom-1&&Text;a&&href',
	searchable:1,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
}
