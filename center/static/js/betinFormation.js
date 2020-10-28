new Vue({
    el:"#pk_information",
    data: {
        infoList:[
            {time:"12345465453",money:"100",type:"1",ctype:"2",balance:"1200",text:"是否改善公司都是"},
            {time:"12345465453",money:"100",type:"1",ctype:"2",balance:"1200",text:"是否改善公司都是"},
            {time:"12345465453",money:"100",type:"1",ctype:"2",balance:"1200",text:"是否改善公司都是"},
            {time:"12345465453",money:"100",type:"1",ctype:"2",balance:"1200",text:"是否改善公司都是"},
            {time:"12345465453",money:"100",type:"1",ctype:"2",balance:"1200",text:"是否改善公司都是"},
            {time:"12345465453",money:"100",type:"1",ctype:"2",balance:"1200",text:"是否改善公司都是"},
        ],
        haveMoretable: false,
    },
    created: function() {


    },
    mounted() {
        

    },
    methods: {
        showTable(){
            this.haveMoretable = !this.haveMoretable
        }
    }

})

$(".pk-table-more a").on("click",function(){
    if($(this).hasClass("icon-ty_xl")){
        $(this).removeClass("icon-ty_xl").addClass("icon-ty_fh")
    }else{
        $(this).removeClass("icon-ty_fh").addClass("icon-ty_xl")
    }
})