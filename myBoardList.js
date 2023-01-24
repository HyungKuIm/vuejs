const MyBoardList = {
    props: {
        items: {
            type: Array,
            default: [],
            description: "Item List"
        }
    },
    template: `
    <div>
        <table id="list">
            <tr>
                <th style="width:50px">글번호</th>
                <th>글제목</th>
                <th style="width:50px">조회수</th>
                <th style="width:70px"></th>
            </tr>
            <tr v-for="item in items" :key="item.no">
                <td>{{item.no}}</td>
                <td v-on:click="boardRead(item)">{{item.title}}</td>
                <td>{{item.view}}</td>
                <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
            </tr>
        </table>
        <button v-on:click="boardWrite" style="float: right;">글쓰기</button>
    </div>
    `,

    methods: {
        boardRead: function (info) {
            console.log('boardRead');
            this.$emit('board-read', info);
        },
        boardWrite: function () {
            this.$emit('board-write');
        },
        boardDelete: function (no) {
            this.$emit('board-delete', no);
        }
    }

} 