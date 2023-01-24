const MyBoardRead = {
    props: ['item'],
    template: '<div>\n' + 
        '<table id="list">' + 
        '    <tr>' + 
        '        <td style="width:50px">글제목</td>' + 
        '        <td>{{item.title}}</td>' + 
        '    </tr>' + 
        '    <tr style="height:300px">' + 
        '        <td colspan="2">{{item.content}}</td>' + 
        '    </tr>' + 
        '</table>' + 
        '<button v-on:click="boardList" style="float: right;">목록</button>' + 
    '</div>',
    methods: {
        boardList: function () {
            this.$emit('board-list');
        }
    }
}